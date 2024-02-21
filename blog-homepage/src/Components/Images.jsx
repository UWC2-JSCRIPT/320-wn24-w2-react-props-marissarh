import React from 'react'
import Picture from '../Content'
import Images from '.../public/Images'

const articleImages = {

  img0: "./images/painting.webp",
  img1:"./images/graffiti.avif",
  img2:"./images/electricChart.jpg",
  img3:"./images/paddleBall.png",
  img4:"./images/blackSmudge.jpg",
  img5:"./images/typewriter.jpg",
  img6:"./images/papers.jpg",

   alt0:"Person painting";
     alt1: "Swings in front of graffiti wall";
     alt2:"Electric Literature's Auto-Publicist";
     alt3: "Sketch of a woman playing paddle-ball";
     alt4: "Three rows of black smudges";
     alt5: "A red typewriter";
     alt6: "Messy pile of papers";

};
const Images = ()=> {
  return(
    <>
    <div className='grid grid-cols-2 gap-4 pt-10 '>
    <Picture imgSrc={img0} imgAlt={alt0} />
    <Picture imgSrc={img2} imgAlt={alt2} />
    <Picture imgSrc={img1} imgAlt={alt1} />
    <Picture imgSrc={img3} imgAlt={alt3} />
    <Picture className='border border-grey' imgSrc={img4} imgAlt={alt4} />
    <Picture className='border border-grey' imgSrc={img5} imgAlt={alt5} />
    <Picture className='border border-grey' imgSrc={img6} imgAlt={alt6} />
    
  </div>
  </>
);};
export default Images;
   
    
    

    
    