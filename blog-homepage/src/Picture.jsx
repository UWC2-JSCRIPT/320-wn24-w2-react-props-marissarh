import './App.css'
import PropTypes from 'prop-types';

function Picture(imgSrc, imgAlt){
    
    return(
        <div className='images'>images
        <img src={props.imgSrc} alt={props.imgAlt}/>
        </div>
    )
}
Picture.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired
}

export default Picture