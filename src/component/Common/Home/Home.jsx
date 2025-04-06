import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const [birdList, setBirdList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:80/birds")
      .then(async (res) => {
        const rawList = res.data.query.categorymembers;

        const filteredList = rawList.filter(
          (bird) => !bird.title.includes("목록")
        );

        const topFive = filteredList.slice(0, 5);

        const updatedList = await Promise.all(
          topFive.map(async (bird) => {
            try {
              const encodedTitle = encodeURIComponent(bird.title);
              const detailRes = await axios.get(
                `http://localhost:80/birds/${encodedTitle}`
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
        console.error("🐤 메인 새 목록 불러오기 실패:", err);
      });
  }, []);

  const handleBirdClick = (title) => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/log-in");
    } else {
      navigate(`/sub/${encodeURIComponent(title)}`);
    }
  };

  return (
    <div className="container">
      <div className="main-content-title-wrap">
        <h2 className="main-content-title en">Dictionary</h2>
        <button
          className="main-content-more"
          onClick={() => {
            const token = localStorage.getItem("accessToken");
            if (!token) {
              alert("로그인이 필요합니다.");
              navigate("/log-in");
            } else {
              navigate("/sub");
            }
          }}
        >
          더보기
        </button>
      </div>

      <div className="main-content-top-wrap">
        {/* 왼쪽 첫 번째 새 */}
        <div className="main-content-top-left">
          {birdList[0] && (
            <div
              className="main-content-top-item"
              onClick={() => handleBirdClick(birdList[0].title)}
            >
              <div className="item-main">{birdList[0].title}</div>
              <figure>
                <img
                  src={
                    birdList[0].imageUrl || "https://via.placeholder.com/150"
                  }
                  alt={birdList[0].title}
                />
              </figure>
            </div>
          )}
        </div>

        {/* 오른쪽 나머지 새들 */}
        <div className="main-content-top-right">
          {birdList.slice(1).map((bird, idx) => (
            <div
              className="main-content-top-item"
              key={idx}
              onClick={() => handleBirdClick(bird.title)}
            >
              <figure>
                <img
                  src={bird.imageUrl || "https://via.placeholder.com/150"}
                  alt={bird.title}
                />
              </figure>
              <div className="item-main">{bird.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="main-content-bottom-wrap">
        <div className="main-content-title-wrap">
          <h2 className="main-content-title en">Community</h2>
          <button className="main-content-more">더보기</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="content-center">베트남 가서 버드와칭을 한 경험</td>
              <td>장나리</td>
              <td>2025.04.04</td>
            </tr>
            <tr>
              <td className="content-center">
                안녕하세요~ 처음왔는데 꿀팁 알려주세요!
              </td>
              <td>권유리</td>
              <td>2025.04.03</td>
            </tr>
            <tr>
              <td className="content-center">
                제가 제주도에서 버드와칭을했는데 너무 좋았어요~
              </td>
              <td>김철수</td>
              <td>2025.04.02</td>
            </tr>
            <tr>
              <td className="content-center">
                안녕하세요~ 처음왔는데 꿀팁 알려주세요!
              </td>
              <td>권유리</td>
              <td>2025.04.03</td>
            </tr>
            <tr>
              <td className="content-center">
                제가 제주도에서 버드와칭을했는데 너무 좋았어요~
              </td>
              <td>김철수</td>
              <td>2025.04.02</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Main;
