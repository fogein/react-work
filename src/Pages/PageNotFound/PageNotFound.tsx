import React from 'react'
import NotFound from '../../assets/PageNotFound.png'

export const PageNotFound: React.FC = () => {
  return (
    <>
      <div className="pageNotFound-container">
        <img src={NotFound} alt="404" className="PNF_img" />
        <div className="pageNF__block2">
        <p className='red'>Page not found</p>
        <p className='notRed'>Sorry, we can’t find what you’re looking for</p>
        </div>
      </div>
    </>
  )
}
