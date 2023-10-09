import Image from 'next/image'
import Marcos from '../../../public/images/Marcos.png'
import Gopher from '../../../public/images/go.svg'
import { Container } from './styles'

const About: React.FC = (): JSX.Element => (
  <Container id="about" className="s-about target-section">
    <div className="row about-info wide" data-animate-block>
      <div className="column lg-6 md-12 about-info__pic-block">
        <Image
          src={Marcos}
          alt="Marcos"
          width={700}
          height={868}
          className="about-info__pic"
          data-animate-el
        />
      </div>

      <div className="column lg-6 md-12">
        <div className="about-info__text">
          <h2 className="text-pretitle with-line" data-animate-el>
            About
          </h2>
          <p className="attention-getter" data-animate-el>
            Hi, Marcos Moura here! 👋 I&apos;m a FullStack Software Engineer
            working mainly with JavaScript and its associated most famous
            frameworks such as ReactJS, NextJS, NodeJS, Typescript, TailwindCSS,
            Styled-Components, REST, and GraphQL APIs.
            <br/> <br/>
            I&apos;m always keeping
            in moving, learning new things, like Golang &nbsp;
            <Image
              src={Gopher}
              alt="Marcos"
              width={30}
              height={30}
              className="about-info__pic"
              data-animate-el
            />, and deep and advanced JavaScript concepts, such as NodeJS Streams,
            benchmarking, memory leaks, long-running processes from NodeJS, and so on.
            I&apos;ll start putting all this into practical projects, like this one to
            prove myself about what I&apos;m learning. So, stay tuned.
          </p>
          <a
            href="https://drive.google.com/file/d/1UP6JuLPAX0hBaN1Rdnr6qPD7M2veH_G1/view?usp=drive_link"
            target="_blank"
            className="btn btn--medium u-fullwidth"
            data-animate-el
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>

    <div className="row about-expertise" data-animate-block>
      <div className="column lg-12">
        <h2 className="text-pretitle" data-animate-el>
          Expertise
        </h2>
        <ul className="skills-list h1" data-animate-el>
          <li>JavaScript</li>
          <li>NodeJS</li>
          <li>ReactJS</li>
          <li>NextJS</li>
          <li>TypeScript</li>
          <li>GraphQL</li>
          <li>Rest API</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
          <li>Material UI</li>
          <li>Styled-Components</li>
          <li>Docker</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
    </div>

    <div className="row about-timelines" data-animate-block>
      <div className="column lg-6 tab-12">
        <h2 className="text-pretitle" data-animate-el>
          Experience
        </h2>

        <div className="timeline" data-animate-el>

        <div className="timeline__block">
          <div className="timeline__bullet" />
          <div className="timeline__header">
            <h4 className="timeline__title">Scopio</h4>
            <h5 className="timeline__meta">Full Stack Software Engineer</h5>
            <p className="timeline__timeframe">April 2022 - March 2023</p>
          </div>
          <div className="timeline__desc">
            <p>
            As a full-stack software engineer, I was responsible for automating some
            processes, like the sending of push notifications through our mobile app
            every time one new job opportunity was included in our job board to all
            photographers that fit the job requirements. This automation makes the
            inner team save time and reach our target audience at once. For this task,
            I used technologies like MongoDB, PostgreSQL, GraphQL, React, NodeJS,
            Typescript, Amazon SNS Service, Amazon SQS Service, and others.
            </p>
          </div>
        </div>

        <div className="timeline__block">
          <div className="timeline__bullet" />
          <div className="timeline__header">
            <h4 className="timeline__title">Tog Design</h4>
            <h5 className="timeline__meta">Jr FrontEnd Developer</h5>
            <p className="timeline__timeframe">August 2021 - April 2022</p>
          </div>
          <div className="timeline__desc">
            <p>
              Helping Tog&apos;s team to deliver high-quality software to your customers
              as Jr front end developer using mainly JavaScript, React, and Typescript.
              During my time at the company, I had the opportunity to work on two projects.
              At first, I was implementing the entire layout from the design team to an inner
              project. For this, I used React, Typescript, and Styled-Components. For the
              second project, I worked as an outsource with a partner&apos;s team, where we
              were migrating the legacy frontend system to React using Typescript using the
              client&apos;s style guide.
            </p>
          </div>
        </div>

          <div className="timeline__block">
            <div className="timeline__bullet" />
            <div className="timeline__header">
              <h4 className="timeline__title">
                Universidade Federal do Tocantins - UFT
              </h4>
              <h5 className="timeline__meta">
                Infrastructure Manager
              </h5>
              <p className="timeline__timeframe">January 2010 - August 2021</p>
            </div>
            <div className="timeline__desc">
              <p>
                In this role, I was acting as a infrastructure Manager,
                responsible for maintaining the health of all IT
                infrastructure, networking, and VoIP and deploying new features
                to maintain all services. I have implemented some scripts using
                shell script and python to automate some repetitive tasks on the server
                side. I worked too with virtualization solutions like VSphere from VMWare.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="column lg-6 tab-12">
        <h2 className="text-pretitle" data-animate-el>
          Education
        </h2>

        <div className="timeline" data-animate-el>
          <div className="timeline__block">
            <div className="timeline__bullet" />
            <div className="timeline__header">
              <h4 className="timeline__title">Unicesumar</h4>
              <h5 className="timeline__meta">
                Systems Analysis and Development
              </h5>
              <p className="timeline__timeframe">January 2015 - January 2019</p>
            </div>
            <div className="timeline__desc">
              <p>
                The Systems Analysis and Development course aims to train
                technologists capable of analyzing, designing, documenting,
                specifying, testing, implementing and maintaining computer
                information systems, acting in a professional manner.
              </p>
            </div>
          </div>

          <div className="timeline__block">
            <div className="timeline__bullet" />
            <div className="timeline__header">
              <h4 className="timeline__title">
                JS Fullstack Bootcamp
              </h4>
              <h5 className="timeline__meta">
                Rocketseat JavaScript Fullstack Bootcamp
              </h5>
              <p className="timeline__timeframe">April 2015 - September 2019</p>
            </div>
            <div className="timeline__desc">
              <p>
              A bootcamp focused in teaching to use the latest JS technologies and
              its frameworks such as ReactJS, NextJS, React Native, Typescript, NodeJS,
              styling libraries such as Styled-Components, TailwindCSS, Material-UI
              among others. SQL and No-SQL databases like PostgreSQL, MongoDB, MySql
              and its ORMs such as sequelize, mongoose, typeORM. In this bootcamp I
              learned to use testing frameworks like Jest, Vitest and some project
              patterns.
              </p>
            </div>
          </div>

          <div className="timeline__block">
            <div className="timeline__bullet" />
            <div className="timeline__header">
              <h4 className="timeline__title">
                Javascript Expert Training
              </h4>
              <h5 className="timeline__meta">
                Advanced JavaScript Training
              </h5>
              <p className="timeline__timeframe">January 2023 - Present</p>
            </div>
            <div className="timeline__desc">
              <p>
              This training aims to make the candidate understand JS advanced concepts
              and when to use it to get all the power of JavaScript language. In this
              course, I have learned and practiced JS concepts like generators, iterators,
              async iterators, map, weak map, reflect, proxy, node timers, regex, design
              patterns like SOLID, DRY, Clean code, dependence injection, and factory among
              some others. I have dived deep into javascript testing using frameworks like
              Jest and the newest nodejs 20 native testing solution, node streams,
              graceful shutdown, performance, and a lot more. in this course, I have learned
              that I can use JS to create the most advanced solution than just a CRUD.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
)

export default About;
