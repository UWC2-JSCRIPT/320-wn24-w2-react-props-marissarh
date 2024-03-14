
import React from 'react';


    
    const Content =({ match }) => {
        const blogArticles =[
            {
            id: match.params.id,
            article:{
              articlePicture: './images/painting.webp'},
              title:`Article ${match.paramas.id}`,
            descrip:`Description for Article ${match.params.id}`,
            authPic:"./images/LouisChew.jpg",
            author: {
              name:'Louis Chew',
              picture:"./images/LouisChew.jpg",
            },
            length:'8 min read',
            date:'Apr 4',
            bookmarked: true,
            category: 'For You',
        
          },
        {
          id:1,
          article:{
            articlePicture:'./images/graffiti.avif',
            title:`Article ${match.params.id}`,
          },
          author:{  
            name:'Kris Gage',
            authPic:"./images/KrisGage.png",},
          descrip:`Description for Article ${match.params.id}`,
          length:'3 min read',
          date:'Mar 30',
          bookmarked: true,
          category: 'For You',
        },
        {
          id:2,
          article:{
            articlePicture: './images/electricChart.jpg',
            title:`This Handy Chart Automatically Generates a Pitch for Your New Novel`,},
          descrip:'Feeling stuck? We help you skip the writing and go traight to the press release',
          author:{  
            author:'Electric Literature',
            authPic:"./images/electricLiterature.jpg",},
          length:'2 min read',
          date:'Mar 28',
          bookmarked: true,
          category: 'For You',
        },
        {
          id:3,
          article:{
            articlePicture:'./images/paddleBall.png',
            title:`Art as a Second Language`,},
          descrip:'Drawing is a translation of all my voices and words — an attempt to draw nothing',
          author:{
            author:'Roman Muradov',
            authPic:"./images/RomanMuradov.png",},
          length:'6 min read',
          date:'Mar 27',
          bookmarked: true,
          category: 'For You',
        },{
          id:4,
          article:{
            articlePicture:'./images/blackSmudge.jpg',
            title:`What Would Happen If You Did These Things Every Day...`,},
          descrip:'For thirty days...',
          author:{
            author:'Alex Mathers', 
            authPic:"./images/AlexMathers.jpg",},
          length:'3 min read',    
          date:'Apr 22', 
          bookmarked: true, 
          category: 'In Case You Missed It',   
        },{
          id:5,
          article:{
            articlePicture: './images/typewriter.jpg',
            title:'10 Strategies for Creating Viral and Powerful Content',},
          author:{
              author:'Zdravko Cvijetic',
              authPic:"./images/ZdravkoCivjetic.jpg",},
          length:'6 min read',
          date:'Apr 22',
          bookmarked: true,
          category: 'In Case You Missed It',  
        },{
          id:6,
          article:{
            articlePicture:'./images/papers.jpg',
            title:`Useful Tools for Writers`,
          },
          descrip:'Jumpstart you process.',
          author:{
            author:'JLRose',
          },
          length:'8 min read',
          date:'Apr 21',
          bookmarked: true,
          category: 'In Case You Missed It', 
        }
        ];
        
    
    return(
        <div>
          <h1>{Content.title}</h1>
        <p>{Content.descrip}</p>
        
        <img src={author.picture} width={250} height={250}/>
      
       
        
</div>
    )
    }
    export default Content
 {/*Picture.propTypes={
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired
}
function Picture({ imgSrc, imgAlt}){*/}

