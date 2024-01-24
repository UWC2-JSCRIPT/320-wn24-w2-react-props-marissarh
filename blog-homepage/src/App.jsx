
import './App.css'



function App( {artTitle,artDescr, authPic, auth, artDate, artLength, artSection}) {
  

  const img1="./images/painting.webp"
  const img2="./images/graffiti.avif"
  const img3="./images/electricChart.jpg"
  const img4="./images/paddleBall.png"
  const img5="./images/blackSmudge.jpg"
  const img6="./images/typewriter.jpg"
  const img7="./images/papers.jpg"

  const alt1="Person painting"
  const alt2="Swings in front of graffiti wall"
  const alt3="Electric Literature's Auto-Publicist"
  const alt4="Sketch of a woman playing paddle-ball"
  const alt5="Three rows of black smudges"
  const alt6="A red typewriter"
  const alt7="Messy pile of papers"
  
  const artTitle1="The 7 Habits of Highly Creative People"
  const artTitle2="Do Something You Can't Win At"
  const artTitle3="This Handy Chart Automatically Generates a Pitch for Your New Novel"
  const artTitle4="Art as a Second Language"
  const artTitle5="What Would Happen If You Did These Things Every Day..."
  const artTitle6="10 Strategies for Creating Viral and Powerful Content<"
  const artTitle7="Useful Tools for Writers"

  const artDescr1="What a good artist understand is that nothing comes from nowhere. Nothing is completely original."
  const artDescr2="And make it something you love"
  const artDescr3="Feeling stuck? We help you skip the writing and go traight to the press release"
  const artDescr4="Drawing is a translation of all my voices and words — an attempt to draw nothing"
  const artDescr5="For thirty days..."
  const artDescr7="Jumpstart your process"

  

const authPic1="./images/LouisChew.jpg"
const authPic2="./images/KrisGage.png"
const authPic3="./images/electricLiterature.jpg"
const authPic4="./images/RomanMuradov.png"
const authPic5="./images/AlexMathers.jpg"
const authPic6="./images/ZdravkoCivjetic.jpg"
const authPic7=""

const author1="Louis Chew"
const author2="Kris Gage"
const author3="Electric Literature"
const author4="Roman Muradov"
const author5="Alex Mathers"
const author6="Zdravko Cvijetic"
const author7="JLRose"

const artDate1="Apr 4"
const artDate2="Mar 30"
const artDate3="Mar 28"
const artDate4="Mar 27"
const artDate5="Apr 22"
const artDate6="April 22"
const artDate7="April 21"

const articleLength1="8 min read"
const articleength2="3 min read"
const articleLength3="2 min read"
const articleLength4="6 min read"
const articleLength5="3 min read"
const articleLength6="6 min read"
const articleLength7="8 min read"

const sec1="For You"
const sec2="In case you missed it"
const sec3 = "bookmark"
const sec4= "Audio available"

      return(
        <>
        
    <h1>{artSection=sec1}</h1>
      <div className='card'>
        <Picture imgSrc={img1} imgAlt={alt1}/> 
          <div className='container'>
            <h2>{artTitle={artTitle1}}</h2>
              <h3>{artDescr={artDescr1}}</h3></div>
          </div>
      
      <div className='card'>
        <Picture imgSrc={img2} imgAlt={alt2}/>
  <div div className='container'>
  <h2>{artTitle={artTitle2}}</h2>
  <h3>{artDescr={artDescr2}}</h3>
  </div>
  </div>
  <div className='card'>
  <Picture imgSrc={img3} imgAlt={alt3}/>
  <div div className='container'>
  <h2>{artTitle={artTitle3}}</h2>
  <h3>{artDescr={artDescr3}}</h3>
  </div>
  </div>
  <div className='card'>
  <Picture imgSrc={img4} imgAlt={alt4} />
  <div div className='container'>
  <h2>{artTitle={artTitle4}}</h2>
  <h3>{artDescr={artDescr4}}</h3>
  </div>
  </div>
  <h3>In case you missed it</h3>
  <div className='card'>
  <Picture imgSrc={img5} imgAlt={alt5} />
  <div className='container'>
  <h2>{artTitle={artTitle5}}</h2>
  <h3>{artDescr={artDescr5}}</h3>
  </div>
  </div>
  <div className='card'>
  <Picture imgSrc={img6} imgAlt={alt6} />
  < div className='container'>
  <h2>{artTitle={artTitle6}}</h2>
  <h3>{artDescr={artDescr6}}</h3>
  </div>
  </div>
  <div className='card'>
  <Picture imgSrc={img7} imgAlt={alt7} />
  <div className='container'>
  <h2>{artTitle={artTitle7}}</h2>
  <h3>{artDescr={artDescr7}}</h3>
  </div>
    </div>
    </>
  )}
  
export default App