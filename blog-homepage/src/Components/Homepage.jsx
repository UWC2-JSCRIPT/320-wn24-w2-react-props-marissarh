import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Content from './Content';
import { GoBookmark } from "react-icons/go";
import AuthorPic from './AuthorPic';

const Homepage = () =>{
  const [articles, setArticles] = useState([]);

  useEffect(()=>{

    const blogArticles =[
      {
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
      bookmarked: true,
      category: 'For You',
  
    },
  {
    id:1,
    article:{
      articlePicture:'./images/graffiti.avif',
      title:`Do Something You Can't Win At`,
    },
    author:{  
      name:'Kris Gage',
      authPic:"./images/KrisGage.png",},
    descrip:'And make it something you love',
    length:'3 min read',
    date:'Mar 30',
    bookmarked: true,
    category: 'For You',
  },
  {
    id:2,
    article:{
      articlePicture: './images/electricChart.jpg',
      title:`This Handy Chart Automatically Generates a Pitch for Your New Novel`,},
    descrip:'Feeling stuck? We help you skip the writing and go traight to the press release',
    author:{  
      author:'Electric Literature',
      authPic:"./images/electricLiterature.jpg",},
    length:'2 min read',
    date:'Mar 28',
    bookmarked: true,
    category: 'For You',
  },
  {
    id:3,
    article:{
      articlePicture:'./images/paddleBall.png',
      title:`Art as a Second Language`,},
    descrip:'Drawing is a translation of all my voices and words — an attempt to draw nothing',
    author:{
      author:'Roman Muradov',
      authPic:"./images/RomanMuradov.png",},
    length:'6 min read',
    date:'Mar 27',
    bookmarked: true,
    category: 'For You',
  },{
    id:4,
    article:{
      articlePicture:'./images/blackSmudge.jpg',
      title:`What Would Happen If You Did These Things Every Day...`,},
    descrip:'For thirty days...',
    author:{
      author:'Alex Mathers', 
      authPic:"./images/AlexMathers.jpg",},
    length:'3 min read',    
    date:'Apr 22', 
    bookmarked: true, 
    category: 'In Case You Missed It',   
  },{
    id:5,
    article:{
      articlePicture: './images/typewriter.jpg',
      title:'10 Strategies for Creating Viral and Powerful Content',},
    author:{
        author:'Zdravko Cvijetic',
        authPic:"./images/ZdravkoCivjetic.jpg",},
    length:'6 min read',
    date:'Apr 22',
    bookmarked: true,
    category: 'In Case You Missed It',  
  },{
    id:6,
    article:{
      articlePicture:'./images/papers.jpg',
      title:`Useful Tools for Writers`,
    },
    descrip:'Jumpstart you process.',
    author:{
      author:'JLRose',
    },
    length:'8 min read',
    date:'Apr 21',
    bookmarked: true,
    category: 'In Case You Missed It', 
  }
  ];
  setArticles(blogArticles);
  }, [])

return (
  <div>
    <section>
    <h1> For You</h1>
    {renderArticlesByCategory ('For You')}
    </section>
    <section>
      <h3>In Case You Missed It</h3>
      {renderArticlesByCategory('In Case You Missed It')}
      </section>
      </div>);


function renderArticlesByCategory(category){
  const filteredArticles = articles.filter(article => article.category === category);
  return(
    <ul>
      {filteredArticles.map(article => (
        <li key={article.id}>
        <li>{`${article}`}</li> 
            <h2>{article.title}</h2>
            <p>{article.articlePicture}</p>
          
          <p>{article.descrip}</p>
          <p>{article.author.name}</p>
          <p>{article.date}</p>
          <p>{article.length}</p>
          <button>{article.bookmarked ? 'Remove Bookmark' : 'Bookmark'}</button>
        </li>
      ))}
    </ul>
  );
      }
};
      export default Homepage
      
 