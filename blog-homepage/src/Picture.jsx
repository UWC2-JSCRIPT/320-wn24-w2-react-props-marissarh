import './App.css'
import App from './App'
import PropTypes from 'prop-types';

function Picture({imgSrc, imgAlt}){
   const  img1= "./images/painting.webp"
      const alt1="Person painting"
    return(
        
        <img src={imgSrc} width={250} height={250} alt={imgAlt}/>

    )
}


export default Picture