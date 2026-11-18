
function Experience() {
  const experiences = [
    {
      id: 1,
      role: 'HR & Administrative Intern',
      company: 'Ministry of Education, Youth and Sport',
      duration: '3 Months',
      type: 'Internship',
      description:
        'Supported HR and administrative operations through document management, official correspondence, record keeping, and general administrative tasks.',
      responsibilities: [
        'Managed and organized administrative documents.',
        'Assisted with official correspondence and record keeping.',
        'Supported daily HR and administrative activities.'
      ]
    },
    {

  id: 2,
  role: 'Dental Assistant & Customer Service',
  company: 'Dental Clinic',
  duration: '3+ Years',
  type: 'Work Experience',
  description:
    'Provided dental assistance and customer service while supporting daily clinic operations, patient care, and administrative tasks.',
  responsibilities: [
    'Assisted dentists during dental procedures and patient care.',
    'Welcomed patients and provided customer service.',
    'Managed patient records and appointment schedules.',
    'Handled payment records and administrative tasks.',
    'Supported daily dental clinic operations.'
  ]
}

  ]

  return (
    <section id="experience" className="experience-section py-5">
      <div className="container py-5">

        {/* Heading */}
        <div className="text-center mb-5">
          <p className="section-subtitle">MY JOURNEY</p>

          <h2 className="section-title">
            My <span>Experience</span>
          </h2>

          <p className="experience-description">
            My professional experience and practical skills
            gained through work and internship.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="experience-timeline">

          {experiences.map((experience) => (
            <div className="experience-item" key={experience.id}>

              <div className="experience-marker">
                <i className="bi bi-briefcase-fill"></i>
              </div>

              <div className="experience-card">

                <div className="experience-header">
                  <div>
                    <span className="experience-type">
                      {experience.type}
                    </span>

                    <h4>{experience.role}</h4>

                    <h6>
                      <i className="bi bi-building"></i>
                      {' '}{experience.company}
                    </h6>
                  </div>

                  <span className="experience-duration">
                    <i className="bi bi-calendar3"></i>
                    {' '}{experience.duration}
                  </span>
                </div>

                <p className="experience-description-text">
                  {experience.description}
                </p>

                <h6 className="responsibility-title">
                  Key Responsibilities:
                </h6>

                <ul className="experience-list">
                  {experience.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Experience
