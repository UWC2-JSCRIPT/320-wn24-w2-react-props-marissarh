import React from 'react'
import Picture from '../Picture'
import MainArticles from './MainArticles'



function Images(){

    const img0="./images/painting.webp"
    const img1="./images/graffiti.avif"
    const img2="./images/electricChart.jpg"
    const img3="./images/paddleBall.png"
    {/*const img4="./images/blackSmudge.jpg"
    const img5="./images/typewriter.jpg"
const img6="./images/papers.jpg"*/}
    
    
    
    const alt0="Person painting";
    const alt1= "Swings in front of graffiti wall";
    const alt2="Electric Literature's Auto-Publicist";
    const alt3= "Sketch of a woman playing paddle-ball";
    {/*const alt4= "Three rows of black smudges";
    const alt5= "A red typewriter";
const alt6= "Messy pile of papers";*/}

    return(
      <div className='grid grid-cols-2 gap-4 pt-10 '>
      <Picture className='' imgSrc={img0} imgAlt={alt0}/>
      <Picture className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg'imgSrc={img2} imgAlt={alt2}/>
      <Picture imgSrc={img1} imgAlt={alt1}/>
      <Picture imgSrc={img3} imgAlt={alt3}/>
      {/*<div className='col-start-1 col-end-3 grid grid-cols-3 gap-4 pt-8'>
      <Picture imgSrc={img4} imgAlt={alt4}/>
      <Picture imgSrc={img5} imgAlt={alt5}/>
    <Picture imgSrc={img6} imgAlt={alt6}/>
      </div>*/}
      
    
    </div>
    )}

    export default Images