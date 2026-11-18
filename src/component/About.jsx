
function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container py-5">

        {/* Section Heading */}
        <div className="text-center mb-5">
          <p className="section-subtitle">
            GET TO KNOW ME
          </p>

          <h2 className="section-title">
            About <span>Me</span>
          </h2>
        </div>

        {/* About Content */}
        <div className="row justify-content-center">
          <div className="col-lg-10">

            <div className="about-info-card p-4 p-md-5">

              <h3 className="mb-4">
                Who I Am
              </h3>

              <p>
                I am a fourth-year Information Technology student
                at the Royal University of Law and Economics (RULE).
                I have academic knowledge of programming, web
                development, database management, computer
                networking, and IT fundamentals. I am eager to gain
                practical experience, strengthen my technical
                abilities, and contribute to an IT team while
                learning from experienced professionals.
              </p>

              <p>
                My goal is to apply my academic knowledge in a
                real-world environment, continuously learn new
                technologies, and grow into a reliable IT
                professional.
              </p>

              {/* Personal Information */}
              <div className="row g-3 mt-4">

                <div className="col-md-4">
                  <div className="about-detail">
                    <h6>Education</h6>
                    <p>Bachelor's Degree in IT</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="about-detail">
                    <h6>University</h6>
                    <p>RULE</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="about-detail">
                    <h6>Study Year</h6>
                    <p>Fourth Year</p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
