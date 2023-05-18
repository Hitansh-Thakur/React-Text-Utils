import React from 'react'

export const Navbar = (props) => {

  // write a function to handle the search button and search the text in the text box
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("search button clicked");
    let text = event.target.Search.value;
    // console.log(event.target.Search.value);
    props.handleSearch(text);
  }



  return (
    <>
      <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">TextUtils</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>


            </ul>

            {/* Search button */}
            <form onSubmit={handleSubmit} className="d-flex" role="search"  >
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
