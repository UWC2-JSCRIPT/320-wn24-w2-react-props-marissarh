import Picture from './Picture'
import  articles from './Articles'
import './App.css'


  
 export default function App(){

  
  const articleList = articles.map(article => <p key={article.id}><h2>{article.title}</h2><h3>{article.descrip}</h3></p>);
    return (
      <article>
    <h1>For you</h1>
    <p>{articleList}</p>
      </article>
    );
}

/*const sec1="For You"
const sec2="In case you missed it"
const sec3 = "bookmark"
const sec4= "Audio available"*/


