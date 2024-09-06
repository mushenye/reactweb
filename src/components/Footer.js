import React from 'react'

function Footer() {
  return (
    <div>
        <hr/>
      <footer className="bg-light py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto">
              <div className="small m-0">
                Copyright &copy; Simani Communication Technologies 2024
              </div>
            </div>
            <div className="col-auto">
              <a className="small" href="#!">
                Privacy
              </a>
              <span className="mx-1">&middot;</span>
              <a className="small" href="#!">
                Terms
              </a>
              <span className="mx-1">&middot;</span>
              <a className="small" href="#!">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer
