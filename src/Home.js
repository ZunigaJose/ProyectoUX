import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import './tags.css'
import './index.css'
import MainNavBar from './MainNav';
function Login() {
    const [logged, setLogged] = useState(false);
    const [name, setName] = useState("");
    const [profileImg, setPImg] = useState("");
    const responseGoogle = (response) => {
      console.log(response);
      setLogged(true);
      setName(response.profileObj.name);
      setPImg(response.profileObj.imageUrl);
    };

    const responseFail = (response) => {
      setLogged(false);
      setName("");
      setPImg("");
      //algun alert toast o algo ?
    };

    return (
        <div className="row h-100">
          <div className="col-sm-12 my-auto">
            <div className="card w-50 mx-auto">
              <article className="card-body">
             <GoogleLogin clientId="516244190309-rdj0i9i0vrbt82tbuqufe33hv1vue3g8.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseFail}
                cookiePolicy={'single_host_origin'}/>
              </article>
            </div>
         </div>
        </div>
      );
}

function Note(props) {
  console.log(props.nota.date);
  return (
    <div className="card mb-4" id={props.id}>
       <h4 className="card-header">
       <img className="pImg" src={props.nota.pImg}/>
       {'   ' + props.nota.user}
       <p data-toggle="tooltip" data-placement="top" 
       title={props.nota.date.split(' ').splice(1,4).join(' ')}>
         {props.nota.date.split(' ').splice(1,3).join(' ')}</p>
       </h4>
       <div className="card-body">
        <h1 className="card-title">{props.nota.titulo}</h1>
        <p className="card-text">{props.nota.mensaje}</p>
        <button type="button" className={props.isliked ? "btn btn-success" : "btn btn-primary"}
        onClick={() => props.handlelike(props.key)}>{"Like 👍" + '(' + props.nota.likes.length + ')'}</button>
        <button type="button" className={props.isDisliked ? "btn btn-danger" : "btn btn-primary"}
        onClick={() => props.handledislike(props.key)}>{"Dislike 👎" + '(' + props.nota.dislikes.length + ')'}</button>
       </div>
     </div>
   )
}

function InputTags(props) {
  return (
    <div className="input-tag">
      <ul className="input-tag__tags">
        { props.InTags.map((tag, i) => (
          <li key={tag}>
            {tag}
            <button type="button" onClick={() => { props.removeTag(i)}}>+</button>
          </li>
        ))}
        <li className="input-tag__tags__input"><input type="text" onKeyDown={(e) => {props.inputKeyDown(e)}}/></li>
      </ul>
    </div>
  );
}

function DivPosts(props) {
  const [notas, setNotas] = React.useState(JSON.parse(localStorage.getItem('notas')) || []);

  function stNotas(nota) {
    const notasTmp = notas;
    setNotas((notas) => [...notas, nota]);
    notasTmp.push(nota);
    localStorage.setItem('notas', JSON.stringify(notasTmp));
  }

  function isLiked(i) {
    const notasTmp = notas;
    return notasTmp[i].likes.some(
      ele => String(ele) === String(props.name)
    );
  }

  function isDisliked(i) {
    console.log('wuu')
    const notasTmp = notas;
    return notasTmp[i].dislikes.some(
      ele => String(ele) === String(props.name)
    );
  }

  function handlelike(i) {

  }

  function handleDislike(i) {
    
  }

  return (
    <div>
      <div>
        <NewPost  name={props.name} pimg={props.pimg} stNotas={stNotas}/>
      </div>
      <div className="container align-self-center">
        {notas.map((nota, i) => ( 
          <Note key={i} id={i} nota={nota} handlelike={handlelike(i)} handledislike={handleDislike(i)}
          isliked={isLiked(i)} isDisliked={isDisliked(i)}/>
        ))}
      </div>
    </div>
  )
}

function NewPost(props) {

  //const [notas, setNotas] = React.useState(JSON.parse(localStorage.getItem('notas')) || []);
    function publicar(e) {
      if(titulo === '') {
        return;
      }
      const nota = new Object();
      e.preventDefault();
      nota.titulo = String(titulo);
      nota.mensaje = String(mensaje);
      nota.likes = Array(0);
      nota.dislikes = Array(0);
      nota.tags = tagsHook;
      nota.user = props.name;
      nota.pImg = props.pimg;
      nota.date = new Date().toString();
      console.log(nota.date);
      props.stNotas(nota);
      setTags([]);
      setTitulo('');
      setMensaje('');
    }
    const [tagsHook, setTags] = React.useState(Array(0));
    const [titulo, setTitulo] = React.useState('');
    const [mensaje, setMensaje] = React.useState('');

    function removeTag(i) {
      const newTags = [ ...tagsHook ];
      newTags.splice(i, 1);
      setTags(newTags);
    };

    const inputKeyDown = (e) => {
      if(e.key === 'Enter') {
        e.preventDefault();
      }
      const val = e.target.value;
      if (e.key === ' ' && val) {
        if (tagsHook.find(tag => tag.toLowerCase() === val.toLowerCase()) || 
        val === ' ') {
          e.target.value = '';
          return;
        }
        setTags(oldArray => [...oldArray, val]);
        e.target.value = '';
      } else if (e.key === 'Backspace' && !val) {
        removeTag(tagsHook.length - 1);
      }
    };

    return (
      <div className="container align-self-center">
        <div className="row">
          <div className="col-md-8 col-md-offset-4">
            <h2>Nueva Nota</h2>
            <form onSubmit={(e) => publicar(e)}>
              <div className="form-group">
                <label htmlFor="title">
                  Titulo: 
                </label>
                <input value={titulo} type="text" className="form-control" name="title" id="title" required
                onChange={e => setTitulo(e.target.value)}/>
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea 
                  value={mensaje}
                  rows="4"
                  className="form-control"
                  name="description"
                  id="mensaje"
                  required
                  onChange={e => setMensaje(e.target.value)}
                ></textarea>
              </div>
              <br/>
             <InputTags InTags={tagsHook} removeTag={removeTag} inputKeyDown={inputKeyDown}/> 
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Publicar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}



function Home(props) {
  return (
    <div>
      <div>
        <MainNavBar/>
      </div>
      <div>
        <DivPosts name={props.name} pimg={props.pimg}/>
      </div>
    </div>
  )
}

export default Home;