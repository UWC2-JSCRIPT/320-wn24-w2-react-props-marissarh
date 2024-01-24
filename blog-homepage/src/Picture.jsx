import './App.css'
import App from './App'
import PropTypes from 'prop-types';

function Picture({imgSrc, imgAlt}){
    const img0="./images/painting.webp"
    const alt0="Person painting"
    return(
        
        <img src={imgSrc} width={250} height={250} alt={imgAlt}/>

    )
}
Picture.PropTypes={
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired
}


export default Picture