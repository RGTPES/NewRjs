import React, { useEffect, useState } from "react";
import { Input, Select, Tag, Button, Modal, Form } from "antd";
import axios from "axios";
import useDebounce from "../hook/UseDebounce";

interface Post {
  id: number;
  title: string;
  image: string;
  date: string;
  status: boolean;
}

export default function LayOutDF() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalStopOpen, setIsModalStopOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [namePost, setNamePost] = useState("");
  const [url, setUrl] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const debouncedSearch = useDebounce(searchValue, 500);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNamePost(e.target.value);
  };
  const handleChangeURL = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleOpenModal = () => {
    setEditingPost(null);
    setNamePost("");
    setUrl("");
    setIsModalOpen(true);
  };
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAdd = () => {
    if (editingPost) {
      const updatedPost = { ...editingPost, title: namePost, image: url };
      axios
        .put(`http://localhost:3000/posts/${editingPost.id}`, updatedPost)
        .then(() => {
          setPosts(
            posts.map((p) => (p.id === editingPost.id ? updatedPost : p))
          );
          setIsModalOpen(false);
          setEditingPost(null);
        });
    } else {
      const newId =
        posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1;
      const newPost: Post = {
        id: newId,
        title: namePost,
        image: url,
        date: new Date().toISOString().slice(0, 10),
        status: true,
      };
      axios.post("http://localhost:3000/posts", newPost).then(() => {
        setPosts([...posts, newPost]);
        setIsModalOpen(false);
        setNamePost("");
        setUrl("");
      });
    }
  };

  const handleOpenEditModal = (post: Post) => {
    setEditingPost(post);
    setNamePost(post.title);
    setUrl(post.image);
    setIsModalOpen(true);
  };

  const handleOpenStopModal = (post: Post) => {
    setSelectedPost(post);
    setIsModalStopOpen(true);
  };
  const handleCloseStopModal = () => setIsModalStopOpen(false);

  const handleStopPost = () => {
    if (!selectedPost) return;
    const updated = posts.map((p) =>
      p.id === selectedPost.id ? { ...p, status: !p.status } : p
    );
    setPosts(updated);
    setIsModalStopOpen(false);
  };

  const handleOpenDeleteModal = (post: Post) => {
    setSelectedPost(post);
    setIsModalDeleteOpen(true);
  };
  const handleCloseDeleteModal = () => setIsModalDeleteOpen(false);

  const handleDeletePost = () => {
    if (!selectedPost) return;
    axios.delete(`http://localhost:3000/posts/${selectedPost.id}`).then(() => {
      setPosts(posts.filter((p) => p.id !== selectedPost.id));
      setIsModalDeleteOpen(false);
    });
  };

  useEffect(() => {
    axios
      .get<Post[]>("http://localhost:3000/posts")
      .then((res) => setPosts(res.data));
  }, []);

  const filteredPosts = posts.filter((p) => {
    const matchesSearch = p.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase());
    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "published" && p.status) ||
      (statusFilter === "draft" && !p.status);
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Input
          placeholder="Nhập từ khóa tìm kiếm"
          style={{ width: 250 }}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Select
          placeholder="Lọc bài viết"
          style={{ width: 160 }}
          value={statusFilter}
          onChange={(value) => setStatusFilter(value)}
          options={[
            { label: "Tất cả", value: "all" },
            { label: "Đã xuất bản", value: "published" },
            { label: "Bản nháp", value: "draft" },
          ]}
        />
        <Button type="primary" onClick={handleOpenModal}>
          Thêm mới bài viết
        </Button>
      </div>

      <table className="w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2 text-center w-16">STT</th>
            <th className="border p-2">Tiêu đề</th>
            <th className="border p-2 text-center">Hình ảnh</th>
            <th className="border p-2 text-center">Ngày viết</th>
            <th className="border p-2 text-center">Trạng thái</th>
            <th className="border p-2 text-center">Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((post, index) => (
            <tr key={post.id}>
              <td className="border p-2 text-center">{index + 1}</td>
              <td className="border p-2">{post.title}</td>
              <td className="border p-2 text-center">
                <img
                  src={post.image}
                  alt="post"
                  className="w-12 h-12 rounded-full object-cover mx-auto"
                />
              </td>
              <td className="border p-2 text-center">{post.date}</td>
              <td className="border p-2 text-center">
                <Tag color={post.status ? "green" : "orange"}>
                  {post.status ? "Đã xuất bản" : "Chưa xuất bản"}
                </Tag>
              </td>
              <td className="border p-2 text-center space-x-2">
                <Button
                  className="bg-orange-400 text-white border-none"
                  onClick={() => handleOpenStopModal(post)}
                >
                  {post.status ? "Chặn" : "Bỏ chặn"}
                </Button>
                <Button
                  type="primary"
                  onClick={() => handleOpenEditModal(post)}
                >
                  Sửa
                </Button>
                <Button danger onClick={() => handleOpenDeleteModal(post)}>
                  Xóa
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        title={editingPost ? "Sửa bài viết" : "Thêm mới bài viết"}
        open={isModalOpen}
        onCancel={handleCloseModal}
        footer={[
          <Button
            key="reset"
            onClick={() => {
              setNamePost("");
              setUrl("");
            }}
          >
            Làm mới
          </Button>,
          <Button key="submit" type="primary" onClick={handleAdd}>
            {editingPost ? "Cập nhật" : "Xuất bản"}
          </Button>,
        ]}
      >
        <Form layout="vertical">
          <Form.Item label="Tên bài viết" name="title">
            <Input
              placeholder="Nhập tiêu đề"
              value={namePost}
              onChange={handleChangeName}
            />
          </Form.Item>
          <Form.Item label="Hình ảnh" name="image">
            <Input
              placeholder="URL hình ảnh"
              value={url}
              onChange={handleChangeURL}
            />
          </Form.Item>
          <Form.Item label="Nội dung" name="content">
            <Input.TextArea rows={6} placeholder="Nhập nội dung" />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Xác Nhận"
        open={isModalStopOpen}
        onCancel={handleCloseStopModal}
        footer={[
          <Button onClick={handleCloseStopModal}>Hủy</Button>,
          <Button key="submit" type="primary" onClick={handleStopPost}>
            Xác Nhận
          </Button>,
        ]}
      >
        {selectedPost && (
          <p>
            Bạn có chắc muốn <b>{selectedPost.status ? "chặn" : "bỏ chặn"}</b>{" "}
            bài viết:{" "}
            <span className="font-semibold">{selectedPost.title}</span>?
          </p>
        )}
      </Modal>

      <Modal
        title="Xác Nhận Xóa"
        open={isModalDeleteOpen}
        onCancel={handleCloseDeleteModal}
        footer={[
          <Button onClick={handleCloseDeleteModal}>Hủy</Button>,
          <Button key="submit" type="primary" danger onClick={handleDeletePost}>
            Xóa
          </Button>,
        ]}
      >
        {selectedPost && (
          <p>
            Bạn có chắc muốn xóa bài viết:{" "}
            <span className="font-semibold">{selectedPost.title}</span>?
          </p>
        )}
      </Modal>
    </div>
  );
}
