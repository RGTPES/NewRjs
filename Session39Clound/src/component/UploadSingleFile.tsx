import axios from "axios";
import React, { useState } from "react";

const CLOUD_NAME = import.meta.env.VITE_CLOUND_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET;

export default function UploadMultiFile() {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [imgURLs, setImgURLs] = useState([]);

  const handleChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
    setPreviews(selectedFiles.map((f) => URL.createObjectURL(f)));
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      alert("File không được để trống");
      return;
    }
    try {
      const uploadPromises = files.map((file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", UPLOAD_PRESET);
        return axios.post(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
          formData
        );
      });

      const responses = await Promise.all(uploadPromises);
      const urls = responses.map((res) => res.data.secure_url);
      setImgURLs(urls);
      console.log("Uploaded URLs:", urls);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        {previews.map((src, i) => (
          <img key={i} src={src} alt="preview" width={100} />
        ))}
      </div>

      <div>
        {imgURLs.map((url, i) => (
          <p key={i}>
            <a href={url} target="_blank" rel="noreferrer">
              {url}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
}
