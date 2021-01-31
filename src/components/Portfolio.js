import React from 'react'
export default function Portfolio() {
  return (
    <div>
          <section className="resume-section" id="Portfolio">
            <div className="resume-section-content">
                <h2 className="mb-5">Portfolio Projects</h2>


    {/*  <!-- User Directory--> */}
                            <div className="row">
                <div className="card col-sm-6">
                    <div className="flex-grow-1">
                        <div className="m-2 card ">
                            <div className="card-header">
                                <h3 className="card-title">User Directory Mobile App</h3>
                            </div>
                            <a href="https://trilambda122.github.io/hw19-user-directory/"> <img className="card-img-top shadow portfolio-img"  src="assets/img/userdir-listing_600xAuto.png" alt="Employee Tracking App"/>
                            </a>
                            <div className="card-body">
                                <p className="card-text">User directory application using react framework built with a mobile-first viewpoint. The application includes sort and search functionality along with clean styling. 
The MVP of this application was created using sample data provided by the random user  API: <a href="https://randomuser.me.">https://randomuser.me.</a></p>
                            </div>
                            <div className="card-footer text-muted">
                                <a href="https://github.com/trilambda122/hw19-user-directory">Check out the repo here</a>
                            </div>
                        </div>
                    </div>
                </div>


{/* Soundtracks */}

                <div className="card col-sm-6">
                        <div className="flex-grow-1">
                            <div className='m-2  card'>
                                <div className="card-header">
                                    <h3 className="card-title">Soundtracks</h3>
                                </div>
                                <a href="https://tv-soundtracks.herokuapp.com"> <img className="portfolio-img shadow card-img-top" src="assets/img/soundtracks-appleresults_600xAuto.png" alt="Vacation App"/></a>
                                <div className="card-body">
                                    <p className="card-text">Have you ever been watching a show and thought, "This show has excellent music, I would sure like to have a playlist of this!".  That's the problem Soundtracks is here to help with.  
                                    Just search for your favorite show, movie, or game, and it will create a playlist in your apple music account.  
                                    Or if you want to just watch a few songs videos, you can do that too.</p>
                                    <p> This is a React application with utilizes Apple MusicKit and Youtube APIs. </p>
                                </div>
                                <div className="card-footer text-muted">
                                    <a href="https://github.com/trilambda122/soundtrack-database">Check out the repo here</a>
                                </div>
                            </div>
                        </div>
                    </div>


{/* <!-- Docket Master --> */}
                <div className="card col-sm-6">
                        <div className="flex-grow-1">
                            <div className='m-2  card'>
                                <div className="card-header">
                                    <h3 className="card-title">Docket Master</h3>
                                </div>
                                <a href="https://pure-atoll-36836.herokuapp.com/"> <img className="portfolio-img shadow card-img-top" src="assets/img/docketmaster-homepage_600xAuto.png" alt="Vacation App"/></a>
                                <div className="card-body">
                                    <p className="card-text">The integrated court system is a fast-paced, dynamic environment that changes by the moment. Docket Master helps participants to keep track of the cases, litigants, attorneys, as well as the Division the case is located and the amount of the case.

                                                            Docket Master uses MySQL to organize its back-end. 
                                                            Sequelize provides the Object Relational Mapping (ORM) support. 
                                                            Express provides routing and middleware capabilities. Node.js is the runtime environment for Docket Master. HTML, CSS, Bootstrap, and Express Handlebars provide the views for user interaction and interface with Docket Master.</p>
                                </div>
                                <div className="card-footer text-muted">
                                    <a href="https://github.com/etorres-revature/Docket_Master">Check out the repo here</a>
                                </div>
                            </div>
                        </div>
                    </div>
          

                {/* <!--BOOK SEARCH --> */}
              
                    <div className="card col-sm-6">
                        <div className="flex-grow-1">
                            <div className="m-2 card">
                                <div className="card-header">
                                    <h3 className="card-title">Book Search</h3>
                                </div>
                                <a href="https://hw21-google-books-search.herokuapp.com"> <img className="portfolio-img shadow card-img-top" src="assets/img/book-search-search_600xAuto.png" alt="Vacation App"/>
                                </a>
                                <div className="card-body">
                                    <p className="card-text">Have you ever been wanting to read a book but at a loss for what to read! 
                                    This reading list application allows you to search and review books then add them to your favorites list. 
                                    You will never have to wonder what to read next!</p>
                                    <p>The application utilizes MongoDB for the backend database and React for client-side rendering. Along with Bootstrap and customer CSS for styling</p>
                                </div>
                                <div className="card-footer text-muted">
                                    <a href="https://github.com/trilambda122/hw21-googlebooks-search">Check out the repo here</a>
                                </div>
                            </div>
                        </div>
                    </div>
            

                {/* <!-- STR Rentals--> */}
              
                    <div className="card col-sm-6">
                        <div className="flex-grow-1">
                            <div className="m-2 card">
                                <div className="card-header">
                                    <h3 className="card-title">Short term rental aggrgator </h3>
                                </div>
                                <a href="https://quiet-tor-69912.herokuapp.com/signin"> <img className="portfolio-img shadow card-img-top" src="assets/img/str-listing_600xAuto.png" alt="Vacation App"/>
                                </a>
                                <div className="card-body">
                                    <p className="card-text">Short term rental aggregator application returns listings from multiple short term rental sites for a given city. 
                                    Giving the user the power to find their best travel experience </p>
                                    <p>The STR Aggregator is a MERN full-stack web application that utilizes web scrappers to collect information; MongoDB for the backend; Express.js for server routing; 
                                        React.js for client-side routing and views;and, Node.js for its runtime environment.</p>
                                </div>
                                <div className="card-footer text-muted">
                                    <a href="https://github.com/trilambda122/Pointy_Goblins">Check out the repo here</a>
                                </div>
                            </div>
                        </div>
                    </div>
             
             
{/* close the row for the cards */}
                    </div>

{/* leave in place */}
                </div>
                </section>
        
           
    </div>
  )
}
