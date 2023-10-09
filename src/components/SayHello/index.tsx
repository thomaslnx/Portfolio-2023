import { Container } from './styles'

const SayHello: React.FC = (): JSX.Element => (
  <Container id="contact" className="s-contact target-section">
    <div className="row contact-top">
      <div className="colum lg-12">
        <h2 className="text-pretitle">
          Get In Touch
        </h2>

        <p className="h1">
          I would love hear from you.
          Whether you have a question or just
          want to know more about me, my work and
          my professional experience - just ping me a
          message
        </p>
      </div>
    </div>
    
    <div className="row contact-bottom">
      <div className="column lg-3 md-5 tab-6 stack-on-550 contact-block">
        <h3 className="text-pretitle">Reach me at</h3>
        <p className="contact-links">
          <a href="mailto:marcos.msilva10@gmail.com">marcos.msilva10@gmail.com</a> <br />
          <a href="tel:+5564999461326">+55 63 99946 1326</a>
        </p>
      </div>
      <div className="column mid-lg lg-4 md-5 tab-6 stack-on-550 contact-block">
        <h3 className="text-pretitle">Social</h3>
        <ul className="contact-social">
          <li>
            <a href="https://twitter.com/thomaslnx">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/thomaslnx">Github</a>
          </li>
          <li>
            <a href="https://instagram.com/thomaslnx">Instagram</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/marcos-de-moura-silva/">LinkedIn</a>
          </li>
        </ul>
      </div>
      <div className="column lg-4 md-12 contact-block">
        <a 
          href="mailto:marcos.msilva10@gmail.com"
          className="mailtoui btn btn-medium u-fullwidth contact-btn"
        >
          Say Hello
        </a>
      </div>
    </div>
  </Container>
)

export default SayHello