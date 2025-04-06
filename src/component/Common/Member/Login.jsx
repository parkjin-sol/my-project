import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    memberId: "",
    memberPw: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost/auth/login", form);

      const { accessToken, refreshToken } = response.data;

      console.log("AccessToken 확인:", accessToken);
      console.log("RefreshToken 확인:", refreshToken);

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      alert("로그인되었습니다.");
      navigate("/");
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data) {
        setErrorMsg(error.response.data["error-message"]);
      } else {
        setErrorMsg("서버 오류가 발생했습니다.");
      }
    }
  };
  return (
    <>
      <div className="container member-container">
        <form onSubmit={handleSubmit}>
          <h1 className="page-title">로그인</h1>
          <input
            type="text"
            name="memberId"
            placeholder="아이디를 입력해주세요."
            value={form.memberId}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="memberPw"
            value={form.memberPw}
            onChange={handleChange}
            placeholder="비밀번호를 입력해주세요."
            required
          />
          {errorMsg && <div className="error-message">{errorMsg}</div>}
          <button type="submit">로그인</button>
        </form>
        <div className="sign-up-btn" onClick={() => navi("/sign-up")}>
          회원가입 하러가기
        </div>
      </div>
    </>
  );
}

export default Login;
