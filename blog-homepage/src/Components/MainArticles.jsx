import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Images from './Images';
import Picture from '../Content';
import { GoBookmark } from "react-icons/go";
import AuthorPic from './AuthorPic';

const mainArticles = () =>{
  const [upperArticles, setUpperArticles] = useState([]);
  useEffect(()=>{
    const articles =[{
      id: 0,
      article:{
        articlePicture: './images/painting.webp'},
        title:'The 7 Habits of Highly Creative People',
      descrip:'What a good artist understand is that nothing comes from nowhere. Nothing is completely original.',
      authPic:"./images/LouisChew.jpg",
      author: {
        name:'Louis Chew',
        picture:"./images/LouisChew.jpg",},
      length:'8 min read',
      date:'Apr 4',
  
    },
  {
    id:1,
    article:{
      articlePicture:'./images/graffiti.avif',
    title:`Do Something You Can't Win At`,
    },
    authPic:"./images/KrisGage.png",
    descrip:'And make it something you love',
    author:'Kris Gage',
    length:'3 min read',
    date:'Mar 30',
  },
  {
    id:2,
    
    title:`This Handy Chart Automatically Generates a Pitch for Your New Novel`,
    descrip:'Feeling stuck? We help you skip the writing and go traight to the press release',
    authPic:"./images/electricLiterature.jpg",
    author:'Electric Literature',
    length:'2 min read',
    date:'Mar 28',
  },
  {
    id:3,
    title:`Art as a Second Language`,
    descrip:'Drawing is a translation of all my voices and words — an attempt to draw nothing',
    authPic:"./images/RomanMuradov.png",
    author:'Roman Muradov',
    length:'6 min read',
    date:'Mar 27',}
  ];
  setUpperArticles(articles);
  }, [])

return (
  <div>
    <h1> For You</h1>
    <ul>
      {upperArticles.map(upperArticle =>(
        <li key={upperArticle.id}>
          <Link to={`/upperArtile/${upperArticle.id}`}>
            <h2>{upperArticle.title}</h2>
          </Link>
          <p>{upperArticle.descrip}</p>
        </li>
      ))}
    </ul>
  </div>
);
      };
      export default mainArticles
      
  {/*function MainArticles(){
    const mArticlesArray = mArticles.map(article =>
        <li className='border border-grey ' key={article.id}>
          <h2 className='font-bold'>{article.title}</h2>
          <p className='text-slate-500'>{article.descrip}</p>
          
          <br />
          <h3>{article.author}</h3>
          <div className='grid grid-cols-6 gap-5'> 
          <h4 className='text-slate-500  '>{article.length}</h4>
          <h4 className='text-slate-500  '>{article.date}</h4>
          <GoBookmark />
          </div>
          </li>
    )

return (
<>
<ul className='grid grid-cols-2 gap-4 pt-10 '> {mArticlesArray}</ul>
</>

)

}*/}


