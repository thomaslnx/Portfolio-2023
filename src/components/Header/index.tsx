import { Container } from './styles';

interface HeaderProps {
  menuIsClicked: boolean;
}

const Header: React.FC<HeaderProps> = ({ menuIsClicked }: HeaderProps): JSX.Element => (
  <Container className="s-header">
    <div className="header-mobile">
      <span className="mobile-home-link">
        <a href="#">Marcos.</a>
      </span>
      <a className={`mobile-menu-toggle ${ menuIsClicked === true ? 'is-clicked' : '' }`} href="#0">
        <span>Menu</span>
      </a>
    </div>

    <div className="row wide main-nav-wrap">
      <nav className="column lg-12 main-nav">
        <ul>
          <li>
            <a href="#" className="home-link">
              Marcos.
            </a>
          </li>
          <li className="current">
            <a href="#intro" className="smoothscroll">
              Intro
            </a>
          </li>
          <li>
            <a href="#about" className="smoothscroll">
              About
            </a>
          </li>
          <li>
            <a href="#works" className="smoothscroll">
              Works
            </a>
          </li>
          <li>
            <a href="#contact" className="smoothscroll">
              Say Hello
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </Container>
)

export default Header;
