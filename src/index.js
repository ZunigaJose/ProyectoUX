import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from "react-google-login";
import './index.css';
//import Login from './logIn'
import MainNavBar from './MainNav';
import Home from './Home'

function Login(props) {

  const responseGoogle = (response) => {
    console.log(response);
    props.logged(true);
    props.name(response.profileObj.email);
    props.setImg(response.profileObj.imageUrl);
    console.log(response.profileObj.imageUrl);

  };

  const responseFail = (response) => {
    props.logged(false);
    props.name("");
    props.setImg("");
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

function App() {
  const [logged, setLogged] = React.useState(false);
  const [name, setName] = React.useState("");
  const [profileImg, setPImg] = React.useState("");

  function logged1(val) {
    setLogged(val);
  }

  function email(val) {
    setName(val);
  }

  function pimg(val) {
    setPImg(val);
    console.log(val);
  }
  return (
    <div>
      {(!logged) ? <Login logged={logged1} name={email} setImg={pimg}/> : 
      <Home name={name} pimg={profileImg} /> }
    </div>
  )
}

ReactDOM.render(
    <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

