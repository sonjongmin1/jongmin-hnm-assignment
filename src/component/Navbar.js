import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-regular-svg-icons'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, Link } from 'react-router-dom'

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M  Home", "Sale", "지속 가능성"];

  let [width, setWidth] = useState(0);

  const navigate = useNavigate();

  const goToLogin = () => { 
    navigate("/login");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      // 입력한 검색어를 읽어와서
      let keyword = event.target.value;
      // url을 바꿔준다.
      navigate(`/?q=${keyword}`)
    }
  };

  return (
    <div>
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>

      <div className="nav-header">
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>

      {authenticate?(<div className='login-button' onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그아웃</span>
      </div>
      ) : (<div>
        <div className='login-button' onClick={goToLogin}>
        <FontAwesomeIcon icon={faUser} />
      <div>로그인</div>
      </div>
        </div>)}
        </div>
     

      <div className='nav-section'>
        <Link to="/">
        <img width={100} src='https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg' /></Link>
      </div>

      <div className='menu-area'>
           <ul className="menu">
          {menuList.map((menu, index) => (
            <li>
              <a href="#" key={index}>
                {menu}
              </a>
            </li>
          ))}
          </ul>
        <div  className='search-box'>
          <FontAwesomeIcon icon={faSearch} />
          <input className='no-border' type='text' onKeyPress={(event)=>search(event)} placeholder='제품 검색'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
