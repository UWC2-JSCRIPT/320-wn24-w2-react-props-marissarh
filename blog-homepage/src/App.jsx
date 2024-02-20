import {React,Routes, Route} from 'react';
import Content from './Content';
import './index.css';
import Homepage from './Components/Homepage';

 const App = () => {
   return (
    <div>
      <Routes>
        <Route exact path="/" component={Homepage}/>
        <Route path="/article/:id" component={Content}/>
      </Routes>
     
      </div>
     
   );
 };
 
 export default App
      


