import React from 'react'
import DocketMaster from './portfolio/docketmaster'
import WeatherApp from './portfolio/docketmaster'
export default function Portfolio() {
  return (
    <div>
          <section className="resume-section" id="Portfolio">
            <div className="resume-section-content">
                <h2 className="mb-5">Portfolio Projects</h2>

 {/* <!-- Docket Master --> */}
                    <div className="row">
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <div className='m-2  card'>
                                <div className="card-header">
                                    <h3 className="card-title">Docket Master</h3>
                                </div>
                                <a href="https://pure-atoll-36836.herokuapp.com/"> <img className="portfolio-img card-img-top" src="assets/img/docketmaster-authentication.png" alt="Vacation App"/></a>
                                <div className="card-body">
                                    <p className="card-text">Get your Legal Briefs</p>
                                </div>
                                <div className="card-footer text-muted">
                                    <a href="https://github.com/etorres-revature/Docket_Master">Check out the repo here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Weather App --> */}
                <div className="row">
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <div className="m-2 card">
                                <div className="card-header">
                                    <h3 className="card-title">WEATHER</h3>
                                </div>
                                <a href="https://trilambda122.github.io/hw6-weatherapp/"> <img className="portfolio-img card-img-top" src="assets/img/Weather-app.png" alt="Vacation App"/>
                                </a>
                                <div className="card-body">
                                    <p className="card-text">Always good to know what its like outside!</p>
                                </div>
                                <div className="card-footer text-muted">
                                    <a href="https://github.com/trilambda122/hw6-weatherapp">Check out the repo here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Vaction Destination --> */}
                <div className="row">
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <div className="m-2 card">
                                <div className="card-header">
                                    <h3 className="card-title">Vaction Destination</h3>
                                </div>
                                <a href="https://kkaraman.github.io/earnestNovas/"> <img className="portfolio-img card-img-top" src="assets/img/Vacation Destination.png" alt="Vacation App"/>
                                </a>
                                <div className="card-body">
                                    <p className="card-text">Find something to do in these times!</p>
                                </div>
                                <div className="card-footer text-muted">
                                    <a href="ttps://github.com/KKaraman/earnestNovas">Check out the repo here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/*  <!-- Employee Tracking CLI--> */}
                <div className="row">
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <div className="m-2 card">
                                <div className="card-header">
                                    <h3 className="card-title">Employee Tracker</h3>
                                </div>
                                <a href="#"> <img className="portfolio-img card-img-top" src="assets/img/Employee Tracker.png" alt="Employee Tracking App"/>
                                </a>
                                <div className="card-body">
                                    <p className="card-text">Manage like a pro!</p>
                                </div>
                                <div className="card-footer text-muted">
                                    <a href="https://github.com/trilambda122/hw12-Employee-tracker">Check out the repo here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                     {/*  <!-- User Directory--> */}
                     <div className="row">
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <div className="m-2 card">
                                <div className="card-header">
                                    <h3 className="card-title">User Directory Mobile App</h3>
                                </div>
                                <a href="#"> <img className="portfolio-img card-img-top" src="assets/img/userdir.png" alt="Employee Tracking App"/>
                                </a>
                                <div className="card-body">
                                    <p className="card-text">Stay in Touch</p>
                                </div>
                                <div className="card-footer text-muted">
                                    <a href="https://github.com/trilambda122/hw12-Employee-tracker">Check out the repo here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


{/* leave in place */}
                </div>
                </section>
        
           
    </div>
  )
}
