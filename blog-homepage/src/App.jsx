import Picture from './Picture'
import Article from './Article'
import './App.css'




 

  const article=[{
    id: 0,
    img0: "./images/painting.webp",
    artTitle:'The 7 Habits of Highly Creative People',
    artDescr:'What a good artist understand is that nothing comes from nowhere. Nothing is completely original.',
    author: 'Louis Chew',
    artLength:'8 min read',
    artDate:'Apr 4',

  },
{
  id:1,
  img1:"./images/graffiti.avif",
  artTitle:`Do Something You Can't Win At`,
  artDescr:'And make it something you love',
  author:'Kris Gage',
  artLength:'3 min read',
  artDate:'Mar 30',
},{
  id:2,
  img2:"./images/electricChart.jpg",
  artTitle:`This Handy Chart Automatically Generates a Pitch for Your New Novel`,
  artDescr:'Feeling stuck? We help you skip the writing and go traight to the press release',
  author:'Electric Literature',
  artLength:'2 min read',
  artDate:'Mar 28',
},
{
  id:3,
  img3:"./images/paddleBall.png",
  artTitle:`Art as a Second Language`,
  artDescr:'Drawing is a translation of all my voices and words — an attempt to draw nothing',
  author:'Roman Muradov',
  artLength:'6 min read',
  artDate:'Mar 27',
},
{
  id:4,
  img4:"./images/blackSmudge.jpg",
  artTitle:`What Would Happen If You Did These Things Every Day...`,
  artDescr:'For thirty days...',
  author:'Alex Mathers',
  artLength:'3 min read',
  artDate:'Apr 22',
},
{
  id:5,
  img5:"./images/typewriter.jpg",
  artTitle:'10 Strategies for Creating Viral and Powerful Content',
  author:'Zdravko Cvijetic',
  artLength:'6 min read',
  artDate:'Apr 22'
},
{id:6,
  img7:"./images/papers.jpg",
  artTitle:`Useful Tools for Writers`,
  artDescr:'Jumpstart you process.',
  author:'JLRose',
  artLength:'8 min read',
  artDate:'Apr 21',

}]
 

  const alt="Person painting"
  const alt2="Swings in front of graffiti wall"
  const alt3="Electric Literature's Auto-Publicist"
  const alt4="Sketch of a woman playing paddle-ball"
  const alt5="Three rows of black smudges"
  const alt6="A red typewriter"
  const alt7="Messy pile of papers"

const authPic1="./images/LouisChew.jpg"
const authPic2="./images/KrisGage.png"
const authPic3="./images/electricLiterature.jpg"
const authPic4="./images/RomanMuradov.png"
const authPic5="./images/AlexMathers.jpg"
const authPic6="./images/ZdravkoCivjetic.jpg"
const authPic7=""

const sec1="For You"
const sec2="In case you missed it"
const sec3 = "bookmark"
const sec4= "Audio available"


export default function Article(){
  const articleList = article.map.articles => 
  <li>{Article}</li>;
  return <ul> {articleLists}</ul>;
}