import React, { useState } from "react";
import GoogleLogin from "react-google-login";

function Login() {
    const [logged, setLogged] = useState(false);
    const [name, setName] = useState('');
    const [profileImg, setPImg] = useState('');
    const responseGoogle = response => {
        console.log(response);
        setLogged(true);
        setName(response.profileObj.name);
        setPImg(response.profileObj.imageUrl);
    }

    const responseFail = response => {
        setLogged(false);
        setName('');
        setPImg('');
        //algun alert toast o algo ?
    }

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


class Home extends React.Component() {
    
}

export default Home;