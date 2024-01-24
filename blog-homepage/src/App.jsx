import Picture from './Picture'
import  articles from './Articles'
import './App.css'


  
 function App(){

  const img0= "./images/painting.webp"
  const alt0 = "Person painting"
  const articleList = articles.map(article => <p key={article.id}> <p>{article.title}</p><p>{article.image}</p><span>{article.descrip}</span></p>);
    return (
      <div>
      < Picture imgSrc={img0} imgAlt={alt0}/>
      </div>
     
      
    )
}

/*const sec1="For You"
const sec2="In case you missed it"
const sec3 = "bookmark"
const sec4= "Audio available"*/


export default App;