import React from 'react'
import Picture from '../Content'

function AuthorPic () {

    const authPic0 = "./images/LouisChew.jpg"
    const authPic1="./images/KrisGage.png"
    const authPic2="./images/electricLiterature.jpg"
    const authPic3="./images/RomanMuradov.png"

    const authAlt0="Author Louis Chew"
    const authAlt1="Author Kris Gage"
    const authAlt2="Author Electric Literature"
    const authAlt3="Author Roman Muradov"


  return (
    <div className=''>
        <Picture imgSrc={authPic0} alt={authAlt0}/>
        <Picture imgSrc={authPic1} alt={authAlt1}/>
        <Picture imgSrc={authPic2} alt={authAlt2}/>
        <Picture imgSrc={authPic3} alt={authAlt3}/>

        </div>
  )
}

export default AuthorPic