import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home";
import About from "./Page/About";
import Contact from "./Page/Contact";
import ProductList from "./Page/ProductList";
import ProductDetail from "./Page/ProductDetail";
import TaskList from "./Page/TaskList";
import TaskDetail from "./Page/TaskDetail";
import BlogLayout from "./Page/BlogLayout";
import Post from "./Page/Post";
import PostDetail from "./Page/PostDetails";
import Home2 from "./Page/Home2";
import Product2 from "./Page/Product2";
import Detail2 from "./Page/Detail2";
import Error from "./Page/Error";
import Register from "./Page/Register";
import Login from "./Page/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<ProductList />}></Route>
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="tasklist" element={<TaskList />} />
        <Route path="taskdetail/:id" element={<TaskDetail />} />
        <Route path="blog" element={<BlogLayout />}>
          <Route path="post" element={<Post />} />
          <Route path="posts/:id" element={<PostDetail />} />
        </Route>
        <Route path="home2" element={<Home2 />} />
        <Route path="product2" element={<Product2 />} />
        <Route path="detail2" element={<Detail2 />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
