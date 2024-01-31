import './App.css'
import PropTypes from 'prop-types';
import AuthorPic from './Components/AuthorPic';

function Picture({ imgSrc, imgAlt}){
    
    return(
        <>
        <img src={imgSrc}  alt={imgAlt} width={250} height={250}/>
        
</>
    )
}
Picture.propTypes={
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired
}


export default Picture