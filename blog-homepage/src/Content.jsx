import './App.css'
import React from 'react';


    
    const Content =({match}) => {
        const content = {
            id: match.params.id,
            title:  `Content ${match.params.id}`,
            descrip: `Content for Article ${match.params.id}`,
        };
        
    
    return(
        <div>
        
        <img src={imgSrc}  alt={imgAlt} width={250} height={250}/>
        <h1>{content.title}</h1>
        <p>{content.descrip}</p>
       
        
</div>
    )
    }
 {/*Picture.propTypes={
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired
}
function Picture({ imgSrc, imgAlt}){*/}

export default Content