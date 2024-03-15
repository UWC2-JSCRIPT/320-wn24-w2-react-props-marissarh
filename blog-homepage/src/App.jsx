import { React } from 'react';
import yourArticles from './_data/your-articles.json';
import missedArticles from './_data/missed-articles.json'
import Articles from './Articles';


function App(){

  return(
    <div>
    <div>
      <h1>For you</h1>
      <hr/>
    </div>
    <div>
      {yourArticles.map(article => {
        <Articles

        title={article.title}
        description={article.description}
        image={article.image}
        link={article.link}
        author={article.author}
        postedDate={article.postedDate}
        minutesToRead={article.minutesToRead}
        hasAudioAvailable={article.hasAudioAvailable}
        memberPreview={article.memberPreview}
        />}
      )}
    </div>
    <h2>In case you missed it</h2>
    <div>
    {missedArticles.map(article => {
        <Articles

        title={article.title}
        description={article.description}
        image={article.image}
        link={article.link}
        author={article.author}
        postedDate={article.postedDate}
        minutesToRead={article.minutesToRead}
        hasAudioAvailable={article.hasAudioAvailable}
        memberPreview={article.memberPreview}
        />})}
    </div>
    </div>
  )
  

  
}
 export default App
      


