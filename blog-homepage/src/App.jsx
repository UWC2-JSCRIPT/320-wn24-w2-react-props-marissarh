import React from 'react';
import MainArticles from './Components/MainArticles';
import Images from './Components/Images';
import './index.css';
import BottomArticles from './Components/BottomArticles';

 

 const App = () => {
   return (
    <div>
     <div className='ml-20'>
      <h1 className='mt-8  text-2xl'>For you</h1>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className='content-center'>
      </div>
      <MainArticles className=''/>
      <Images />
      <h1>In case you missed it</h1>
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


