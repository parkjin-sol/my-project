import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BirdList() {
  const [birdList, setBirdList] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    // 토큰이 있을 경우에만 Authorization 헤더 추가
    const config = token
      ? {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      : {};

    axios
      .get("http://localhost:80/birds", config)
      .then(async (res) => {
        const rawList = res.data.query.categorymembers;

        // 목록 제거
        const filteredList = rawList.filter(
          (bird) => !bird.title.includes("목록")
        );

        const updatedList = await Promise.all(
          filteredList.map(async (bird) => {
            try {
              const encodedTitle = encodeURIComponent(bird.title);
              const detailRes = await axios.get(
                `http://localhost:80/birds/${encodedTitle}`,
                config
              );

              return {
                ...bird,
                imageUrl: detailRes.data.imageUrl || "",
              };
            } catch (e) {
              return {
                ...bird,
                imageUrl: "",
              };
            }
          })
        );

        setBirdList(updatedList);
      })
      .catch((err) => {
        console.error("🐤 새 목록 불러오기 실패:", err);
      });
  }, []);

  const handleClick = (title) => {
    navigate(`/sub/${encodeURIComponent(title)}`);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  return (
    <div className="container">
      <ul className="bird-list">
        {birdList.slice(0, visibleCount).map((bird, idx) => (
          <li
            key={idx}
            className="bird-list-item"
            onClick={() => handleClick(bird.title)}
          >
            <div className="thumb">
              <img
                src={bird.imageUrl || "https://via.placeholder.com/150"}
                alt={bird.title}
              />
            </div>
            <p className="title">{bird.title}</p>
          </li>
        ))}
      </ul>

      {visibleCount < birdList.length && (
        <div className="more-btn-wrap">
          <button className="more-btn" onClick={handleLoadMore}>
            더보기
          </button>
        </div>
      )}
    </div>
  );
}

export default BirdList;
