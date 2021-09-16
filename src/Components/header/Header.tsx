import React from 'react'
import { Logo } from '../Logo'
import userImg from '../../assets/profile.svg'
import burgerMenu from '../../assets/burger.svg'

export const Header: React.FC = () => {
  return (
    <div className='container'>
      <header>
        <div className="header__container">
          <Logo/>
          <div className="user__container">
            <a href="/" className="link__user">
            <span className="user__name">John Smith</span>
            <img src={userImg} alt="" className="user__profile" />
            </a>
          </div>
        </div>

        {/* burger */}

        {/* <button className="burger">
          <img src={burgerMenu} alt="menu" />
        </button> */}


        {/* burger end */}

      </header>
    </div>


  )
}
