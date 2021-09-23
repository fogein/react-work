import React from 'react'
import search from '../../assets/search.svg'

export const Search:React.FC = () => {
  return (
    <form className="search-form" action="#" method="#">
        <input className="search-input" type="text" name="search" id="search" placeholder="Search..."/>
        <button className="search-button" type="submit"><img src={search} alt="search" /></button>
      </form>
  )
}
