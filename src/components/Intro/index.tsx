'use client'

import { Container } from './styles'
import _3DHandComponent from '../_3DHandComponent'

// 👋
const Intro: React.FC = (): JSX.Element => (
  <Container id="intro" className="s-intro target-section">
    <div className="row intro-content wide">
      <div className="column">
        <div className="text-pretitle with-line">Hello World</div>
        <h1 className="text-huge-title">
          Hi Folks, <_3DHandComponent /> <br />
          I am Marcos, <br />
          a JavaScript, <br />
          Full Stack <br />
          Software Engineer <br />
        </h1>
      </div>

      <ul className="intro-social">
        <li>
          <a href="https://instagram.com/thomaslnx">Instagram</a>
        </li>
        <li>
          <a href="https://twitter.com/thomaslnx">Twitter</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/marcos-de-moura-silva/">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/thomaslnx">Github</a>
        </li>
      </ul>
    </div>

    <a href="#about" className="intro-scrolldown smoothscroll">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
      </svg>
    </a>
  </Container>
);

export default Intro;
