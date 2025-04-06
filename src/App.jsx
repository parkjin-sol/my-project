import { AuthProvider } from "./context/AuthContext";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Common/Include/Header";
import Footer from "./component/Common/Include/Footer";
import Home from "./component/Common/Home/Home";
import "./App.css";
import BirdList from "./component/Birds/BirdList";
import BirdDetails from "./component/Birds/BirdDetails";
import SignUp from "./component/Common/Member/SignUp";
import Login from "./component/Common/Member/Login";
import MyPage from "./component/Common/Member/MyPage";
import BoardList from "./component/Board/BoardList";
function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sub" element={<BirdList />} />
          <Route path="/sub/:title" element={<BirdDetails />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/my-page" element={<MyPage />} />
          <Route path="/boards" element={<BoardList />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
