import Picture from './Picture'
import './App.css'

function App() {

  const img1="https://miro.medium.com/v2/1*PIC-U670COEqmGwt4cvXAA.jpeg"
  const img2="blog-homepage/src/wk2Images/img2.png"
  const img3="https://miro.medium.com/v2/1*KHs6OgOb7_aJhmQvOKj_dg.jpeg"
  const img4="https://miro.medium.com/v2/1*_NTwW2r8Konom4d5vIPkuw.png"
  const img5="https://miro.medium.com/v2/0*oHk6k7XOGuvbgCUH.jpeg"
  const img6="https://miro.medium.com/v2/0*PO_h-CgPjUqxFB0i"
  const img7="blog-homepage/src/wk2Images/img7.jpg"

  const alt1="Person painting"
  const alt2="Swings in front of graffiti wall"
  const alt3="Electric Literature's Auto-Publicist"
  const alt4="Sketch of a woman playing paddle-ball"
  const alt5="Three rows of black smudges"
  const alt6="A red typewriter"
  const alt7="Messy pile of papers"

  return (
    <div className="Picture">Hi class
    <Picture imgSrc={img1} imgAlt={alt1}/>
    <Picture imgSrc={img2} imgAlt={alt2}/>
    <Picture imgSrc={img3} imgAlt={alt3}/>
    <Picture imgSrc={img4} imgAlt={alt4} />
    <Picture imgSrc={img5} imgAlt={alt5} />
    <Picture imgSrc={img6} imgAlt={alt6} />
    <Picture imgSrc={img7} imgAlt={alt7} />
    </div>
  )
}

export default App