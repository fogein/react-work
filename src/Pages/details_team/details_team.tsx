import React from 'react'
import { CardTeam } from '../../Components/Card_team/CardTeam'
import { Header } from '../../Components/header/Header'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Table } from '../../Components/Table/Table'

export const Details_team:React.FC = () => {
  return (
    <>
      <div className="bg">
        <Header/>
        <Navbar/>
        <div className="details_team-container">
          <CardTeam/>
          <Table/>
        </div>
      </div>
    </>
  )
}
