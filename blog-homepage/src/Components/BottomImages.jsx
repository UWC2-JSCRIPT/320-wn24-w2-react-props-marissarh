import React from 'react'
import Picture from '../Picture'

function BottomImages (){

    const img4="./images/blackSmudge.jpg"
    const img5="./images/typewriter.jpg"
    const img6="./images/papers.jpg"

    const alt4= "Three rows of black smudges";
    const alt5= "A red typewriter";
    const alt6= "Messy pile of papers";

    return(
        <div className='col-start-1 col-end-3 grid grid-cols-3 gap-4 pt-8 '>
      <Picture className='border border-grey' imgSrc={img4} imgAlt={alt4}/>
      <Picture className='border border-grey' imgSrc={img5} imgAlt={alt5}/>
      <Picture className='border border-grey' imgSrc={img6} imgAlt={alt6}/>
      
      </div>
      
    )
}

export default BottomImages