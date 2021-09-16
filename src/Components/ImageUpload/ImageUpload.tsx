import React from 'react'
import uploadImage from '../../assets/addPhoto.svg'

export const ImageUpload: React.FC = () => {
  return (
    <>
      <button className="image__upload-button">
        <img src={uploadImage} alt="" className="image__upload" />
      </button>
    </>
  )
}
