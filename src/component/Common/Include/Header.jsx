import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navi = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
  }, [window.location.pathname]); // 페이지 이동 때마다 로그인 체크

  const handleScroll = () => {
    const nav = document.querySelector(".nav");
    if (window.scrollY > 100) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
    navi("/");
  };

  const handleDictionaryClick = () => {
    if (!isLoggedIn) {
      alert("로그인 후 이용 가능합니다.");
      navi("/log-in");
    } else {
      navi("/sub");
    }
  };

  return (
    <header>
      <div className="nav">
        <div className="nav-left">
          <div id="logo" onClick={() => navi("/")}>
            BirdsMag
          </div>
          <ul className="navbar-nav">
            <li className="nav-item eng" onClick={() => navi("/")}>
              Home
            </li>
            <li className="nav-item eng" onClick={handleDictionaryClick}>
              Dictionary
            </li>
            <li className="nav-item eng" onClick={() => navi("/boards")}>
              Community
            </li>
          </ul>
        </div>

        <div className="nav-right">
          {!isLoggedIn ? (
            <>
              <button onClick={() => navi("/log-in")} className="auth-btn">
                로그인
              </button>
              <button onClick={() => navi("/sign-up")} className="auth-btn">
                회원가입
              </button>
            </>
          ) : (
            <>
              <button onClick={() => navi("/my-page")} className="auth-btn">
                마이페이지
              </button>
              <button onClick={handleLogout} className="auth-btn">
                로그아웃
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
