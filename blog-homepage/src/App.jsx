import Picture from './Picture'
import Article, { article } from './Article'
import './App.css'

  
export default function List(){

  const articleList = article.map(Title => <li>{Title}</li>);
    return <ul>{articleList}</ul>
}

/*const sec1="For You"
const sec2="In case you missed it"
const sec3 = "bookmark"
const sec4= "Audio available"*/


