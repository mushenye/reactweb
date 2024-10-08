import React from 'react'
import profile from "./assets/profile.png"
import Services from "./Services"
function Home() {
  return (
    <div>
        <header className="py-5">
                <div className="container px-5 pb-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-xxl-5">
                           
                            <div className="text-center text-xxl-start">
                                <div className="badge bg-gradient-primary-to-secondary text-white mb-4"><div className="text-uppercase">Design &middot; Development &middot; Marketing</div></div>
                                <div className="fs-3 fw-light text-muted">We can help in your office work</div>
                                <h1 className="display-3 fw-bolder mb-5"><span className="text-gradient d-inline">We will work for your , even in tight timelines</span></h1>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                    <a className="btn btn-primary btn-sm px-5 py-3 me-sm-3 fs-6 fw-bolder" href="resume.html">Customers</a>
                                    <a className="btn btn-outline-dark btn-sm px-5 py-3 fs-6 fw-bolder" href="projects.html">Projects</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-7">
                           
                            <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                                <div className="profile bg-gradient-primary-to-secondary">
                                    
                                    <img className="profile-img" src={profile} alt="..." />
                                 
                          
                           
                                </div>

                            </div>
                            <hr/>
                        </div>
                    </div>
                </div>
            </header>
            <Services/>
      
    </div>
  )
}

export default Home
