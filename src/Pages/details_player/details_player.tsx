import React from 'react'
import { CardPlayer } from '../../Components/Card_player/CardPlayer'
import { Header } from '../../Components/header/Header'
import { Navbar } from '../../Components/Navbar/Navbar'

export const Details_player:React.FC = () => {
  return (
    <>
      <div className="bg">
        <Header/>
        <Navbar/>
        <div className="details-container">
          <CardPlayer/>
        </div>
      </div>
    </>
  )
}
