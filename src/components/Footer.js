import React from "react";

function Footer() {
  return (
    <div class="py-2 bg-gradient-primary-to-secondary text-white">
      <div class="container px-5 my-5">
        <div class="text-center">
          <h2 class="display-4 fw-bolder mb-4">
            Let's build something together
          </h2>
          <a
            class="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder"
            href="contact.html"
          >
            Contact US
          </a>
        </div>
      </div>

      <footer className=" py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto">
              <div className="small m-0">
                Copyright &copy; Simani Communication Technologies 2024
              </div>
            </div>
            <div className="col-auto nav-link">
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

export default Footer;
