import './App.css'
import PropTypes from 'prop-types';

function Picture({ imgSrc, imgAlt}){
    
    return(
        
        <img src={imgSrc}  alt={imgAlt} width={250} height={250}/>

    )
}
Picture.propTypes={
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired
}


export default Picture