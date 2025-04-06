import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function BirdDetails() {
  const { title } = useParams(); // ✅ useParams() 호출로 수정
  const [bird, setBird] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const encodedTitle = encodeURIComponent(title);
        const res = await axios.get(
          `http://localhost:80/birds/${encodedTitle}`
        );
        setBird(res.data); // ✅ 이미지와 설명 포함된 단일 객체
      } catch (err) {
        console.error("상세 조회 에러:", err);
      }
    };

    fetchDetail();
  }, [title]);

  if (!bird) return <p>로딩 중...</p>;

  return (
    <div className="view-detail">
      <h1 className="view-title">{bird.title}</h1>

      <div className="view-thumbnail">
        <img src={bird.imageUrl} alt={bird.title} />
      </div>

      <div className="view-content">
        <p>{bird.extract}</p>
      </div>

      <div className="view-comments">
        <h3>💬 댓글</h3>
        <form className="comment-form">
          <input type="text" placeholder="댓글을 입력하세요" />
          <button type="submit">등록</button>
        </form>
        <ul className="comment-list">
          <li>
            <strong>버드유저1:</strong> 부엉이는 정말 멋져요!
          </li>
          <li>
            <strong>새박사:</strong> 좋은 기사 감사합니다 😊
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BirdDetails;
