import  articles from './Articles'
import './App.css'


  
 export default function App(){

  
  const articleList = articles.map(article => 
  <p className='card'key={article.id}><h2>{article.title}</h2><h3>{article.descrip}</h3></p>);
    return (
      
      <article >  
    <h1>{sec1}</h1>
    <p className='container'>{articleList}</p>
    <h3>{sec2}</h3>
      </article>


    );
}

const sec1="For You"
const sec2="In case you missed it"
/*const sec3 = "bookmark"
const sec4= "Audio available"*/


