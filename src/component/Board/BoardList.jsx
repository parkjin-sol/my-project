function BoardList() {
  return (
    <>
      <div className="container table-container">
        <table>
          <thead>
            <tr>
              <th className="content-center">제목</th>
              <th className="content-center">작성자</th>
              <th className="content-center">작성일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="board-content">
                안녕하세요~ 처음왔는데 꿀팁 알려주세요!
              </td>
              <td className="content-center">장나리</td>
              <td className="content-center">2025.04.04</td>
            </tr>
            <tr>
              <td className="board-content">
                안녕하세요~ 처음왔는데 꿀팁 알려주세요!
              </td>
              <td className="content-center">권유리</td>
              <td className="content-center">2025.04.03</td>
            </tr>
            <tr>
              <td className="board-content">
                제가 제주도에서 버드와칭을했는데 너무 좋았어요~
              </td>
              <td className="content-center">김철수</td>
              <td className="content-center">2025.04.02</td>
            </tr>
            <tr>
              <td className="board-content">
                안녕하세요~ 처음왔는데 꿀팁 알려주세요!
              </td>
              <td className="content-center">권유리</td>
              <td className="content-center">2025.04.03</td>
            </tr>
            <tr>
              <td className="board-content">
                제가 제주도에서 버드와칭을했는데 너무 좋았어요~
              </td>
              <td className="content-center">김철수</td>
              <td className="content-center">2025.04.02</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default BoardList;
