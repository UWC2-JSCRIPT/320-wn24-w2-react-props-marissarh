import Picture from './Picture';
import './App.css'



function App() {
  

  const img1=""
  const img2=""
  const img3=""
  const img4=""
  const img5=""
  const img6="./images/typewriter.jpg"
  const img7="";

  const alt1="Person painting"
  const alt2="Swings in front of graffiti wall"
  const alt3="Electric Literature's Auto-Publicist"
  const alt4="Sketch of a woman playing paddle-ball"
  const alt5="Three rows of black smudges"
  const alt6="A red typewriter"
  const alt7="Messy pile of papers"
  
  return (
    <>
    <div className="Blog Page">
      <h1>For You</h1>
     <h2>The 7 Habits of Highly Creative People</h2>
      <h3>"What a good artist understand is that nothing comes from nowhere. Nothing is completely original."</h3>
    <Picture imgSrc={img1} imgAlt={alt1} /> 
    <div>
    <h2>Do Something You Can't Win At</h2>
    <h3>And make it something you love</h3>
    <Picture imgSrc={img2} imgAlt={alt2}/>
    </div>
    <div>
    <h2>This Handy Chart Automatically Generates a Pitch for Your New Novel</h2>
    <h3>Feeling stuck? We help you skip the writing and go traight to the press release</h3>
    <Picture imgSrc={img3} imgAlt={alt3}/>
    </div>
    <div>
    <h2>Art as a Second Language</h2>
    <h3>Drawing is a translation of all my voices and words — an attempt to draw nothing</h3>
    <Picture imgSrc={img4} imgAlt={alt4} />
    </div>
    <Picture imgSrc={img5} imgAlt={alt5} />
    <h2>What Would Happen If You Did These Things Every Day...</h2>
    <Picture imgSrc={img6} imgAlt={alt6} />
    <h2>10 Strategies for Creating Viral and Powerful Content</h2>
    <Picture imgSrc={img7} imgAlt={alt7} />
    <h2>Useful Tools for Writers</h2>
    </div>
    </>
  )

  }
export default App