
import Images from './Images'
import './App.css'

function App() {

  const img1 ="https://miro.medium.com/v2/1*PIC-U670COEqmGwt4cvXAA.jpeg"
  const img2=""
  const img3="https://miro.medium.com/v2/1*KHs6OgOb7_aJhmQvOKj_dg.jpeg"
  const img4="https://miro.medium.com/v2/1*_NTwW2r8Konom4d5vIPkuw.png"
  const img5=""
  const img6=""
  const img7=""

  const alt1="Person painting"
  const alt2="Swings in front of graffiti wall"
  const alt3="Electric Literature's Auto-Publicist"
  const alt4="Sketch of a woman playing paddle-ball"
  const alt5="Three rows of black smudges"
  const alt6="A red typewriter"
  const alt7="Messy pile of papers"
  
  return (
    <div className="Image">
    <Images imgSrc={img1} imgAlt={alt1}/>
    <Images imgSrc={img2} imgAlt={alt2}/>
    <Images imgSrc={img3} imgAlt={alt3}/>
    <Images imgSrc={img4} imgAlt={alt4} />
    <Images imgSrc={img5} imgAlt={alt5} />
    <Images imgSrc={img6} imgAlt={alt6} />
    <Images imgSrc={img7} imgAlt={alt7} />
    </div>
  );
}

export default App