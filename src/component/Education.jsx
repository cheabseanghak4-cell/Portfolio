
function Education() {
  const educationList = [
    {
      id: 1,
      degree: "Bachelor's Degree in Information Technology",
      school: 'Royal University of Law and Economics (RULE)',
      period: '2023 – 2026',
      status: 'Currently Year 4',
      icon: 'bi-mortarboard-fill',
      description:
        'Studying Information Technology with academic knowledge in programming, web development, database management, computer networking, and IT fundamentals.'
    },
    {
      id: 2,
      degree: 'High School',
      school: 'Chea Sim Samaky High School',
      period: '2021 – 2022',
      status: 'Completed',
      icon: 'bi-book-fill',
      description:
        'Completed high school education.'
    },
    {
      id: 3,
      degree: 'High School',
      school: 'Preah Bat Norodom High School',
      period: '2019 – 2021',
      status: 'Completed',
      icon: 'bi-book-fill',
      description:
        'Continued high school education.'
    },
    {
      id: 4,
      degree: 'Primary School',
      school: 'Ang Prachum Primary School',
      period: '2011 – 2019',
      status: 'Completed',
      icon: 'bi-pencil-fill',
      description:
        'Completed primary education.'
    }
  ]

  return (
    <section id="education" className="education-section py-5">
      <div className="container py-5">

        {/* Heading */}
        <div className="text-center mb-5">
          <p className="section-subtitle">
            MY ACADEMIC BACKGROUND
          </p>

          <h2 className="section-title">
            My <span>Education</span>
          </h2>

          <p className="education-description">
            My educational journey and academic background.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="education-timeline">

          {educationList.map((item) => (
            <div className="education-item" key={item.id}>

              <div className="education-marker">
                <i className={`bi ${item.icon}`}></i>
              </div>

              <div className="education-card">

                <div className="education-header">

                  <div>
                    <span className={`education-status ${
                      item.id === 1 ? 'current' : 'completed'
                    }`}>
                      {item.status}
                    </span>

                    <h3>{item.degree}</h3>

                    <h5>
                      <i className="bi bi-building"></i>
                      {' '}{item.school}
                    </h5>
                  </div>

                  <span className="education-period">
                    <i className="bi bi-calendar3"></i>
                    {' '}{item.period}
                  </span>

                </div>

                <p className="education-text">
                  {item.description}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Education
