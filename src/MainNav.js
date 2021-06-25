import { GoogleLogout } from 'react-google-login';
import { useGoogleLogout } from 'react-google-login'
function MainNavBar(props) {

  function logout() {
    props.logged(false);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-4">
      <div className="container-fluid">
        <label className="navbar-brand"
        onClick={props.false}
        >Notas Notas</label>
        <button
          style={{paddingRight:'6px'}}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {props.search && 
            <li>
              <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="button"
                  onClick={props.false}
                >
                  Volver a Inicio
                </button>
            </li>}
            <li>
              <form className="d-flex">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => props.setSearchT(e.target.value)}
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                  value={props.searchTerm}
                  onClick={props.click}
                >
                  Search
                </button>
              </form>
            </li>
            <li className="nav-item">
              <GoogleLogout
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={logout}
              ></GoogleLogout>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNavBar;
