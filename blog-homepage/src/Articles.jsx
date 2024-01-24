import Picture from './Picture'
import App from './App'

import './App.css'

function Articles(){

const img0="./images/painting.webp";
const img1="./images/graffiti.avif";


const alt0="Person painting";
const alt1= "Swings in front of graffiti wall"
return(
  <>
  <Picture imgSrc={img0} imgAlt={alt0}/>
  <Picture imgSrc={img1} imgAlt={alt1}/>

</>
)}

const articles=[
    {
      id: 0,
      title:'The 7 Habits of Highly Creative People',
      descrip:'What a good artist understand is that nothing comes from nowhere. Nothing is completely original.',
      authPic:"./images/LouisChew.jpg",
      author: 'Louis Chew',
      length:'8 min read',
      date:'Apr 4',
      
  
    },
  {
    id:1,
    
    title:`Do Something You Can't Win At`,
    authPic:"./images/KrisGage.png",
    descrip:'And make it something you love',
    author:'Kris Gage',
    length:'3 min read',
    date:'Mar 30',
  },{
    id:2,
    img2:"./images/electricChart.jpg",
    imgAlt: "Electric Literature's Auto-Publicist",
    title:`This Handy Chart Automatically Generates a Pitch for Your New Novel`,
    descrip:'Feeling stuck? We help you skip the writing and go traight to the press release',
    authPic:"./images/electricLiterature.jpg",
    author:'Electric Literature',
    length:'2 min read',
    date:'Mar 28',
  },
  {
    id:3,
    img3:"./images/paddleBall.png",
    title:`Art as a Second Language`,
    imgAlt: "Sketch of a woman playing paddle-ball",
    descrip:'Drawing is a translation of all my voices and words — an attempt to draw nothing',
    authPic:"./images/RomanMuradov.png",
    author:'Roman Muradov',
    length:'6 min read',
    date:'Mar 27',
  },
  {
    id:4,
    img4:"./images/blackSmudge.jpg",
    imgAlt: "Three rows of black smudges",
    title:`What Would Happen If You Did These Things Every Day...`,
    descrip:'For thirty days...',
    authPic:"./images/AlexMathers.jpg",
    author:'Alex Mathers',
    length:'3 min read',
    date:'Apr 22',
  },
  {
    id:5,
    img5:"./images/typewriter.jpg",
    imgAlt: "A red typewriter",
    Title:'10 Strategies for Creating Viral and Powerful Content',
    authPic:"./images/ZdravkoCivjetic.jpg",
    author:'Zdravko Cvijetic',
    Length:'6 min read',
    Date:'Apr 22'
  },
  {id:6,
    img7:"./images/papers.jpg",
    imgAlt: "Messy pile of papers",
    title:`Useful Tools for Writers`,
    descrip:'Jumpstart you process.',
    author:'JLRose',
    length:'8 min read',
    date:'Apr 21',
  
  }]
 



export default articles