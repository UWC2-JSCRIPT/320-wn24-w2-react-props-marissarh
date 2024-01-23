import './App.css'
import PropTypes from 'prop-types';

function Picture(imgSrc, imgAlt){
    
    return(
        <div className='images'>images
        <img src={imgSrc} alt={imgAlt}></img>
        </div>
    )
}
Picture.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired
}

export default Picture