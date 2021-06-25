function MainNavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-4">
      <div className="container-fluid">
        <label className="navbar-brand">Notas Locas</label>
        <button
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
            <li className="nav-item">
              {props.btn && (
                <button
                  className="btn btn-outline-success"
                  onClick={props.signout}
                  type="submit"
                >
                  Cerrar Sesion
                </button>
              )}
            </li>
            <li>
               <form className="d-flex">
                 <input className="form-control" type="search" placeholder="Search" aria-label="Search"
                 onChange={(e) => props.setSearchT(e.target.value)}/>
                 <button className="btn btn-outline-success my-2 my-sm-0" type="submit" value={props.searchTerm}
                 onClick={props.click}>Search</button>
               </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNavBar;
