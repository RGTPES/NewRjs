import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { courses } from "../db";
import { useEffect, useState } from "react";

const CourseDetail = () => {
  const course = courses[0]; // Lấy khóa học đầu tiên làm mẫu
const {courseid} = useParams();
const [courseDetail,setCourseDetails] = useState(null)

useEffect(()=>{
const findCourseById= courses.find(cource=>{
  return cource.id === +(courseid||0)
})
},[courseid])


  return (
    <>
      <Navbar />
      <main className="container">
        <h1>{findCourseById?.title}</h1>
        <p>{findCourseById?.description}</p>
        <span className="topic-badge">{findCourseById?.topic}</span>
        <br />
        <button style={{ marginTop: "20px" }}>&larr; Quay lại</button>
      </main>
    </>
  );
};

export default CourseDetail;
