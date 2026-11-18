import profile from '../assets/profile.jpg'
function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">

          <div className="col-lg-7">
            <p className="welcome-text">
              WELCOME TO MY PORTFOLIO
            </p>

            <h1>
              Hello, I'm <span>CHEAB SEANGHAK</span>
            </h1>

            <h2>Information Technology Student</h2>

            <p className="hero-description">
              I am a fourth-year IT student at Royal University
              of Law and Economics (RULE), interested in technology,
              software development, IT support, and problem-solving.

              I am looking for an opportunity to learn and gain
              practical experience through an IT internship.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-4">
            
<a
  href="/My-CV.pdf"
  download="My-CV.pdf"
  className="btn btn-info"
>
  <i className="bi bi-download me-2"></i>
  Download My CV
</a>
              <a href="#contact" className="btn btn-outline-light btn-lg">
                Contact Me
              </a>
            </div>

            <div className="mt-4 text-secondary">
              <span>📍 Phnom Penh, Cambodia</span>
              <span className="ms-3">🎓 Year 4 IT Student</span>
            </div>
          </div>

          <div className="col-lg-5 text-center">
           <img
  src={profile}
  alt="My Profile"
  className="profile-image"
/>
            </div>
          </div>

        </div>
    
    </section>
  )
}

export default Hero
