import React, { useEffect, useState } from "react";
import axios from "axios";

function MyPage() {
  const [member, setMember] = useState({
    memberId: "",
    memberName: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      setErrorMsg("로그인이 필요합니다.");
      return;
    }

    console.log("마이페이지 요청 전 토큰:", token); // ✅ 이 위치로 옮겨야 함

    axios
      .get("http://localhost/members/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setMember(res.data);
      })
      .catch((err) => {
        console.error(err);
        setErrorMsg("회원 정보를 불러오지 못했습니다.");
      });
  }, []);

  return (
    <div className="mypage-container">
      <h1 className="mypage-title">마이페이지</h1>

      {errorMsg && <p className="error">{errorMsg}</p>}

      <div className="mypage-info">
        <p className="member-info">
          <strong>아이디:</strong> {member.memberId}
        </p>
        <p className="member-info">
          <strong>이름:</strong> {member.memberName}
        </p>
      </div>
      <div className="mypage-btn-wrap">
        <button className="logout-btn">로그아웃</button>
        <button className="delete-btn">회원 탈퇴</button>
      </div>
    </div>
  );
}

export default MyPage;
