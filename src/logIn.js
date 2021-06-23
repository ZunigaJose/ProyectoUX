function Login() {
    return (
        <div className="row h-100">
          <div className="col-sm-12 my-auto">
            <div className="card w-50 mx-auto">
              <article className="card-body">
                <div
                  className="g-signin2"
                  data-onsuccess="onSignIn"
                  data-theme="dark"
                ></div>
              </article>
            </div>
          </div>
        </div>
    );
}

//return (
//  <div className="row h-100">
//    < className="col-sm-12 my-auto">
//<      < className="card w-50 mx-auto">
//        <article className="card-body">
//</article>         <GoogleLogin clientId="516244190309-rdj0i9i0vrbt82tbuqufe33hv1vue3g8.apps.googleusercontent.com"
//          buttonText="Login"
//          onSuccess={responseGoogle}
//          onFailure={responseFail}
//          cookiePolicy={'single_host_origin'}/>
//        </article>
//      </div>
//  
//    </div>
//  </div>
//);

export default Login;
