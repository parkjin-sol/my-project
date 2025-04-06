import { use, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [form, setForm] = useState({
    memberId: "",
    memberPw: "",
    memberName: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:80/members", form);
      if (res.status === 201) {
        alert("회원가입에 성공했습니다! 이제 로그인해주세요~");
        setTimeout(() => {
          navi("/login"); // 👈 로그인 페이지로 이동
        }, 1000);
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.memberId || "회원가입 실패");
    }
  };

  return (
    <>
      <div className="container member-container">
        <form onSubmit={handleSubmit}>
          <h1 className="page-title">회원가입</h1>
          <input
            name="memberId"
            type="text"
            value={form.memberId}
            onChange={handleChange}
            placeholder="아이디를 입력해주세요."
            required
          />
          <input
            name="memberPw"
            type="password"
            value={form.memberPw}
            onChange={handleChange}
            placeholder="비밀번호를 입력해주세요."
            required
          />
          <input
            name="memberName"
            type="text"
            value={form.memberName}
            onChange={handleChange}
            placeholder="이름을 입력해주세요."
            required
          />

          <button type="submit">회원가입</button>
        </form>
      </div>
    </>
  );
};
export default SignUp;
