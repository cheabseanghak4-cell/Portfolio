
function Skills() {
  const skillCategories = [
    {
      icon: '💻',
      title: 'Programming',
      skills: ['C#', 'Java', 'JavaScript']
    },
    {
      icon: '🌐',
      title: 'Web Development',
      skills: ['HTML5', 'CSS3', 'Vue.js'​​, 'React', 'Bootstrap']
    },
    {
      icon: '🗄️',
      title: 'Database Management',
      skills: ['SQL', 'Database Fundamentals']
    },
    {
      icon: '🛠️',
      title: 'Tools & Software',
      skills: [
        'Visual Studio Code',
        'Git',
        'GitHub',
        'MS Office'
      ]
    },
    {
      icon: '🖥️',
      title: 'IT Fundamentals',
      skills: [
        'Computer Basics',
        'Networking Basics',
        'IT Fundamentals'
      ]
    },
    {
      icon: '🤝',
      title: 'Soft Skills',
      skills: [
        'Communication',
        'Teamwork',
        'Problem-Solving',
        'Time Management'
      ]
    }
  ]

  return (
    <section id="skills" className="skills-section py-5">
      <div className="container py-5">

        {/* Section Heading */}
        <div className="text-center mb-5">
          <p className="section-subtitle">
            WHAT I KNOW
          </p>

          <h2 className="section-title">
            My <span>Skills</span>
          </h2>

          <p className="skills-description">
            Technical knowledge and professional abilities
            I have developed through my studies and practice.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="row g-4">
          {skillCategories.map((category) => (
            <div
              className="col-md-6 col-lg-4"
              key={category.title}
            >
              <div className="skill-category-card h-100">

                <div className="skill-icon">
                  {category.icon}
                </div>

                <h4>{category.title}</h4>

                <div className="skill-list">
                  {category.skills.map((skill) => (
                    <span
                      className="skill-tag"
                      key={skill}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
