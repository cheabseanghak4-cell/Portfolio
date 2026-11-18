
function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Dental Clinic Management System',
      type: 'Personal Project',
      description:
        'A web application designed to manage dental clinic information, patient records, treatment history, and invoices.',
      technologies: ['Vue.js', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      status: 'In Progress',
      icon: '🦷',
      github: '#'
    },
    {
      id: 2,
      title: 'Restaurant Management System',
      type: 'Academic Project',
      description:
        'A restaurant management web application developed as a learning project to practice frontend development and user interface design.',
      technologies: ['React', 'JavaScript', 'Bootstrap'],
      status: 'In Progress',
      icon: '🍽️',
      github: '#'
    }
  ]

  return (
    <section id="projects" className="projects-section py-5">
      <div className="container py-5">

        {/* Heading */}
        <div className="text-center mb-5">
          <p className="section-subtitle">MY RECENT WORK</p>

          <h2 className="section-title">
            My <span>Projects</span>
          </h2>

          <p className="projects-description">
            Here are some projects I have worked on
            during my learning journey.
          </p>
        </div>

        {/* Project Cards */}
        <div className="row g-4">

          {projects.map((project) => (
            <div className="col-lg-6" key={project.id}>
              <div className="project-card h-100">

                {/* Project Preview */}
                <div className="project-preview">
                  <div className="preview-content">
                    <span className="preview-icon">
                      {project.icon}
                    </span>

                    <h3>{project.title}</h3>

                    <p>Project Preview</p>
                  </div>
                </div>

                {/* Project Information */}
                <div className="project-content">

                  <div className="project-top">
                    <span className="project-type">
                      {project.type}
                    </span>

                    <span className="project-status">
                      {project.status}
                    </span>
                  </div>

                  <h4>{project.title}</h4>

                  <p className="project-description">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  {/* GitHub */}
                  <div className="project-links">
                    <a
                      href={project.github}
                      className="github-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-github"></i>
                      View Code
                    </a>
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Projects
