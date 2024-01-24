
import App from './App';
import './App.css'



export const article=[
    {
      id: 0,
      image: "./images/painting.webp",
      imageAlt: "Person painting",
      Title:'The 7 Habits of Highly Creative People',
      Descr:'What a good artist understand is that nothing comes from nowhere. Nothing is completely original.',
      authPic:"./images/LouisChew.jpg",
      author: 'Louis Chew',
      Length:'8 min read',
      Date:'Apr 4',
  
    },
  {
    id:1,
    img1:"./images/graffiti.avif",
    imageAlt: "Swings in front of graffiti wall",
    Title:`Do Something You Can't Win At`,
    authPic:"./images/KrisGage.png",
    Descr:'And make it something you love',
    author:'Kris Gage',
    Length:'3 min read',
    Date:'Mar 30',
  },{
    id:2,
    img2:"./images/electricChart.jpg",
    imageAlt: "Electric Literature's Auto-Publicist",
    Title:`This Handy Chart Automatically Generates a Pitch for Your New Novel`,
    Descr:'Feeling stuck? We help you skip the writing and go traight to the press release',
    authPic:"./images/electricLiterature.jpg",
    author:'Electric Literature',
    Length:'2 min read',
    Date:'Mar 28',
  },
  {
    id:3,
    img3:"./images/paddleBall.png",
    Title:`Art as a Second Language`,
    imageAlt: "Sketch of a woman playing paddle-ball",
    Descr:'Drawing is a translation of all my voices and words — an attempt to draw nothing',
    authPic:"./images/RomanMuradov.png",
    author:'Roman Muradov',
    Length:'6 min read',
    Date:'Mar 27',
  },
  {
    id:4,
    img4:"./images/blackSmudge.jpg",
    imageAlt: "Three rows of black smudges",
    Title:`What Would Happen If You Did These Things Every Day...`,
    Descr:'For thirty days...',
    authPic:"./images/AlexMathers.jpg",
    author:'Alex Mathers',
    Length:'3 min read',
    Date:'Apr 22',
  },
  {
    id:5,
    img5:"./images/typewriter.jpg",
    imageAlt: "A red typewriter",
    Title:'10 Strategies for Creating Viral and Powerful Content',
    authPic:"./images/ZdravkoCivjetic.jpg",
    author:'Zdravko Cvijetic',
    Length:'6 min read',
    Date:'Apr 22'
  },
  {id:6,
    img7:"./images/papers.jpg",
    imageAlt: "Messy pile of papers",
    Title:`Useful Tools for Writers`,
    Descr:'Jumpstart you process.',
    author:'JLRose',
    Length:'8 min read',
    Date:'Apr 21',
  
  }]
  /*return(
    <>
    <ul>{Article}</ul>
    </>
  );
function Article({ artTitle,artDescr, authPic, auth, artDate, artLength, artSection}){

    return(
    <>
        <sec sec={artSection}/>
        <auth author={auth}/>
        <article artTitle={artTitle}/>
        <artlength articleLength= {artLength}/>
        <artdescr articleDescr={artDescr}/>
        <authpic authPic={authPic} />
        <artdate artDate = {artDate}/>
        </>
    )
}*/

export default Article