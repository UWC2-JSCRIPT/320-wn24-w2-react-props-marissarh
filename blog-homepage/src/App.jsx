import React from 'react';
import MainArticles from './Components/MainArticles';
import BottomArticles from './Components/BottomArticles';
import Images from './Components/Images';
import './index.css';

 
 const App = () => {
   return (
     <div className='ml-20'>
      <h1 className='mt-8  text-2xl'>For you</h1>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className='content-center'>
      <Images className=''/>
      <MainArticles />
      <BottomArticles />
      </div>
     </div>
   )
 }
 
 export default App
      
    

const sec1="For You"
const sec2="In case you missed it"
/*const sec3 = "bookmark"
const sec4= "Audio available"*/


