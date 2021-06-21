import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import './tags.css'
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


function NewPost(props) {

  const [notas, setNotas] = React.useState(new Object());

    function publicar(e) {
      if(titulo == '') {
        return;
      }
      let nota = new Object();
      e.preventDefault();
      nota.titulo = String(titulo);
      nota.mensaje = String(mensaje);
      nota.likes = Array(0);
      nota.dislikes = Array(0);
      nota.tags = notas;
      nota.user = props.name;
      nota.pImg = props.pimg;
      console.log('',props.pimg);
      setNotas(nota);
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
      if (e.key === 'Space' && val) {
        if (tagsHook.find(tag => tag.toLowerCase() === val.toLowerCase())) {
          return;
        }
        setTags(oldArray => [...oldArray, val]);
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
    <NewPost name={props.name} pimg={props.pimg}/>
  )
}

export default Home;