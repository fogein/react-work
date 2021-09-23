/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { Add_button } from '../../Components/Buttons/Add_button/Add_button'
import { Header } from '../../Components/header/Header'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Search } from '../../Components/Search/Search'
import emptyImageTeams from '../../assets/emptyTeams.jpg'

export const Teams_empty:React.FC = () => {
  return (
    <>
      <div className="bg">
      <Header/>
      <Navbar/>
        <div className="empty-container">
          <div className="upContainer-empty">
              <Search/>
              <Add_button/>
            </div>
            <div className="img-container">
                <div className="img-container-info">
                  <img src={emptyImageTeams} alt="empty" />
                  <h2 className="empty-title">Empty here</h2>
                  <p className="empty-text">Add new teams to continue</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
