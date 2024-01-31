import React from 'react'

const bArticles = [
    {
        id:4,
        title:`What Would Happen If You Did These Things Every Day...`,
        descrip:'For thirty days...',
        authPic:"./images/AlexMathers.jpg",
        author:'Alex Mathers',
        length:'3 min read',
        date:'Apr 22',
      },
      {
        id:5,
        title:'10 Strategies for Creating Viral and Powerful Content',
        authPic:"./images/ZdravkoCivjetic.jpg",
        author:'Zdravko Cvijetic',
        length:'6 min read',
        date:'Apr 22'
      },
      {id:6,
        title:`Useful Tools for Writers`,
        descrip:'Jumpstart you process.',
        author:'JLRose',
        length:'8 min read',
        date:'Apr 21',
      
      }]

      function BottomArticles(){
        const bArticlesArray = bArticles.map(articles =>
            <li className=' ' key={articles.id}>
              <h2 className='font-bold'>{articles.title}</h2>
              <p className='text-slate-500'>{articles.descrip}</p>
              {/*<p>{articles.authPic}</p>*/}
              <br />
              
              <h3>{articles.author}</h3>
              <div className='grid grid-cols-5 gap-4'> 
              <h4 className='text-slate-500 '>{articles.date}</h4>
              <h4 className='text-slate-500 '>{articles.length}</h4>
              </div>
              
              </li>
        )
    
  return (
    <>
    <ul className='col-start-1 col-end-3 grid grid-cols-3 gap-4 pt-8 mb-10 '> {bArticlesArray}</ul>
    </>
   
  )
  
}


export default BottomArticles