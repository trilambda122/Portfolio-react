import React from 'react'

export default function ContEducation() {
  return (
    <div>
      <section className="resume-section" id="certifactions">
            <div className="resume-section-content">
                <h2 className="mb-5">Continuing Education</h2>

                <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">MIT Sloan School of Business</h3>
                        <div className="subheading mb-3">Executive Management Program</div>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2009</span></div>
                </div>

                <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">West Point</h3>
                        <div className="subheading mb-3">Thayer Executive Leadership Program</div>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2019</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">University of Texas</h3>
                        <div className="subheading mb-3">Full Stack Developer Program</div>
                   
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2020</span></div>
                </div>
            </div>
        </section>
    </div>
  )
}
