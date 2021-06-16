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

export default Login;
