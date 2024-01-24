import Picture from './Picture';
import './App.css'


function Article(){

    return(
    <>
<div className="Blog-Page">
    <sec sec={artSection}/>
    <auth author={auth}/>
    <article artTitle={articleTitle}/>
    <artlength articleLength= {artLength}/>
    <artdescr artdescr={articleDescr}/>
    <authpic authPic={authorPicture} />
    <artdate artDate = {articleDate}/>
  </div>

    </>
    )
}

export default Article