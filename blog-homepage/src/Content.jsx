import './App.css'
import PropTypes from 'prop-types';
import AuthorPic from './Components/AuthorPic';


    
    const Content =({match}) => {
        const content = {
            id: match.params.id,
            title:  `Content ${match.params.id}`,
            discrip: `Content for Article ${match.params.id}`,
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