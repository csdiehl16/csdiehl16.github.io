import "./contactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-item">
        <img class="contact-img" src="./linkedin.png" />
        <a
          href="https://www.linkedin.com/in/caleb-diehl-a93a6984"
          target="_blank"
        >
          View Profile
        </a>
      </div>
      <div className="contact-item">
        <img class="contact-img" src="./github.png" />
        <a href="https://github.com/csdiehl" target="_blank">
          View Profile
        </a>
      </div>
      <div className="contact-item">
        <img class="contact-img" src="./mail.png" />
        <a href="#">Contact</a>
      </div>
    </div>
  );
};

export default ContactPage;
