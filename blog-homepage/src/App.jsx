import { React } from 'react';




function App(){
  fetch('./_data/your-articles.json')
  .then(response =>{
    if(!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();

  })
  .then(data =>{
    console.log(data);
  });
  

  return(
    <div>
    
    </div>
  )
  

  
}
 export default App
      


