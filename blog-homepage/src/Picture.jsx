import './App.css'
import App from './App'
import PropTypes from 'prop-types';

function Picture({imgSrc, imgAlt}){
    
    return(
        
        <img src={imgSrc} width={250} height={250} alt={imgAlt}/>

    )
}


export default Picture