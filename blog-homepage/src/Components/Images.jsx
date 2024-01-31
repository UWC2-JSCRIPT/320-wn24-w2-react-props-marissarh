import React from 'react'
import Picture from '../Picture'

function Images(){

    const img0="./images/painting.webp"
    const img1="./images/graffiti.avif"
    const img2="./images/electricChart.jpg"
    const img3="./images/paddleBall.png"
    
    const alt0="Person painting";
    const alt1= "Swings in front of graffiti wall";
    const alt2="Electric Literature's Auto-Publicist";
    const alt3= "Sketch of a woman playing paddle-ball";

    return(
      <div className='grid grid-cols-2 gap-4 pt-10 border border-grey'>
      <Picture imgSrc={img0} imgAlt={alt0} />
      <Picture className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg'imgSrc={img2} imgAlt={alt2} />
      <Picture imgSrc={img1} imgAlt={alt1} />
      <Picture imgSrc={img3} imgAlt={alt3} />
      
    </div>
    )}

    export default Images