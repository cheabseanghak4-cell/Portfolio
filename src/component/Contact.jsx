
function Contact() {
  // ប្តូរទៅជា Telegram Username ពិតប្រាកដរបស់អ្នក
  const telegramUsername = 'babay_hak'

  const telegramLink = `https://t.me/${telegramUsername}`

  const contactInfo = [
    {
      icon: 'bi-envelope-fill',
      title: 'Email',
      value: 'cheabseanghak4@gmail.com',
      link: null
    },
    {
      icon: 'bi-telephone-fill',
      title: 'Phone',
      value: '0963641419',
      link: null
    },
    {
      icon: 'bi-geo-alt-fill',
      title: 'Location',
      value: 'Phnom Penh, Cambodia',
      link: null
    },
    {
      icon: 'bi-telegram',
      title: 'Telegram',
      value: `@${telegramUsername}`,
      link: telegramLink
    }
  ]

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container py-5">

        {/* Section Header */}
        <div className="text-center mb-5">
          <p className="section-subtitle">GET IN TOUCH</p>

          <h2 className="section-title">
            Contact <span>Me</span>
          </h2>

          <p className="contact-description">
           I am currently seeking IT internship opportunities where I can apply my knowledge, gain practical experience, and develop my technical skills. Feel free to contact me!
          </p>
        </div>

        <div className="row g-4">

          {/* Contact Information */}
          <div className="col-lg-5">
            <div className="contact-info-card h-100">

              <h4>Contact Information</h4>

              <p className="contact-info-text">
                Let's connect! You can reach me through
                the following contact details.
              </p>

              {contactInfo.map((item) => (
                <div className="contact-item" key={item.title}>

                  <div className="contact-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </div>

                  <div>
                    <h6>{item.title}</h6>

                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="contact-link"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p>{item.value}</p>
                    )}
                  </div>

                </div>
              ))}

              {/* Social Links */}
              <div className="contact-social">
                <h6>Follow Me</h6>

                <div className="social-links">

                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <i className="bi bi-github"></i>
                  </a>

                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>

                  <a
                    href={telegramLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Telegram"
                  >
                    <i className="bi bi-telegram"></i>
                  </a>

                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="contact-form-card">

             <div className="contact-form-heading">
  <h4>Send Me a Message</h4>

<a
  href={telegramLink}
  target="_blank"
  rel="noreferrer"
  className="telegram-contact-btn"
>
  <i className="bi bi-telegram"></i>
  Telegram
</a>
</div>

              <form onSubmit={(e) => e.preventDefault()}>

                <div className="mb-3">
                  <label className="form-label">
                    Your Name
                  </label>

                  <input
                    type="text"
                    className="form-control contact-input"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Your Email
                  </label>

                  <input
                    type="email"
                    className="form-control contact-input"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Subject
                  </label>

                  <input
                    type="text"
                    className="form-control contact-input"
                    placeholder="Enter message subject"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">
                    Message
                  </label>

                  <textarea
                    className="form-control contact-input"
                    rows="5"
                    placeholder="Write your message..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="contact-submit-btn"
                >
                  Send Message
                  <i className="bi bi-send-fill ms-2"></i>
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
