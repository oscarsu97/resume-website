import { ImLinkedin } from "react-icons/im";
import { ImGithub } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { SiMicrosoftoutlook } from "react-icons/si";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="callToAction">
        <p>Stay In Touch.</p>
      </div>
      <div className="socials">
        <a
          href="https://www.instagram.com/zhenhuanggg/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagramSquare alt="instagram" title="instagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/oscarsu97"
          target="_blank"
          rel="noreferrer"
        >
          <ImLinkedin alt="linkedin" title="Linkedin" />
        </a>
        <a href="https://github.com/oscarsu97" target="_blank" rel="noreferrer">
          <ImGithub alt="github" title="github" />
        </a>
        <a href="mailto:oscarsu@u.nus.edu" target="_blank" rel="noreferrer">
          <SiMicrosoftoutlook alt="outlook" title="outlook" />
        </a>
      </div>
      <div className="copyright">
        <p>&copy;2021 OSCAR SU</p>
      </div>
    </div>
  );
};

export default Contact;
