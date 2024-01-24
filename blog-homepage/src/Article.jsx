import Picture from './Picture';
import App from './App';
import './App.css'


function Article({ artTitle,artDescr, authPic, auth, artDate, artLength, artSection}){

    return(
    <>
        <sec sec={artSection}/>
        <auth author={auth}/>
        <article artTitle={artTitle}/>
        <artlength articleLength= {artLength}/>
        <artdescr articleDescr={artDescr}/>
        <authpic authPic={authPic} />
        <artdate artDate = {artDate}/>
        </>

    
    )
}

export default Article