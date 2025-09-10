import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductDetail from "./components/ProductDetail";
import Student from "./components/Student";
import { useNavigate } from "react-router-dom";
import Student2 from "./components/Student2";
import Account from "./components/Account";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Team from "./components/Team";
import Teams from "./components/Teams";
import TeamsIndex from "./components/TeamsIndex";
import LazyLoadComp from "./components/LazyLoadComp";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TeamsIndex />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="student/:name" element={<Student />} />
        <Route path="student2" element={<Student2 />} />
        <Route path="account" element={<Account />} />
        <Route path="privateroute" element={<PrivateRoute />} />
        <Route path="login" element={<Login />} />
        <Route path="/teams" element={<Teams />}>
          <Route index element={<TeamsIndex />} />
          <Route path=":teamId" element={<Team />} />
        </Route>
        <Route path="/lazy" element={<LazyLoadComp />} />
      </Routes>
    </>
  );
}

export default App;
