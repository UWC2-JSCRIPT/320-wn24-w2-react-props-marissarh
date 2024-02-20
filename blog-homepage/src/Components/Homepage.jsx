import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Images from './Images';
import Content from '../Content';
import { GoBookmark } from "react-icons/go";
import AuthorPic from './AuthorPic';

const Homepage = () =>{
  const [homepageArticles, setHomepageArticles] = useState([]);
  useEffect(()=>{
    const blogArticles =[{
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
    category: 'In Case You Missed It', 
  }
  ];
  setHomepageArticles(blogArticles);
  }, [])

return (
  <div>
    <h1> For You</h1>
    <ul>
      {homepageArticles.map(homepage =>(
        <li key={homepage.id}>
          <Link to={`/homepage/${homepage.id}`}>
            <h2>{homepage.title}</h2>
          </Link>
          <p>{homepage.descrip}</p>
        </li>
      ))}
    </ul>
  </div>
);
      };
      export default Homepage
      
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


