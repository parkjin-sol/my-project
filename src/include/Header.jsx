import { useNavigate } from "react-router-dom";


const Header = () => {

    return (
        <>
            <header>
                <nav>
                    <div className="nav-left">
                    <a id="logo" href="/">
                        Birds
                    </a>
                    <ul className="navbar-nav" >
                        <li className="nav-item eng">Home</li>
                        <li className="nav-item eng">Dictionary</li>
                        <li className="nav-item eng">Article</li>
                        <li className="nav-item eng">Community</li>
                    </ul>
                    </div> 
                    <div className="nav-right">
                        <form action="" className="search-form">
                            <input type="text" placeholder="검색어를 입력하세요" className="search-input" />
                            <button type="submit" className="search-button">Search</button>
                        </form>
                    </div>
                </nav>
                
            </header>
        </>
    );
};
export default Header;