import React, { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import profile from "./assets/hero.png";
import aboutPic from "./assets/about-pic.png";
import eshop from "./assets/eshop-gif.gif";
import eshopimage from "./assets/eshop-image.png";
import eshopVideo from "./assets/eshop-video1.mp4";
import eshopMobile from "./assets/database-video.mp4";
import eshopdocker from "./assets/eshop-docker.png";
import emspic from "./assets/ems.png";
import docker from "./assets/docker.png";
import ems from "./assets/ems.gif";
import emsVideo from "./assets/ems.mp4";
import todo from "./assets/todoapp.gif";
import tododocker from "./assets/todo-docker.png";
import todoimg from "./assets/todoapp.png";
import todoappVideo from "./assets/todoapp.mp4";
import callWaiting from "./assets/callwaiting.svg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import emailjs from "emailjs-com";
import resume from "./assets/Madhu.resume.pdf";
import { Tooltip } from "react-tooltip";
import Loader from "./Loader";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {

  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState({
    to_name: "",
    from_name: "",
    message: "",
  });
  const [lightMode, setLightMode] = useState(true);
  const handleTheme = () => {
    document.body.classList.toggle("light");
    console.log("light mode on");
    setLightMode(!lightMode);
  };
  useEffect(()=>{
    AOS.init();
  },[count])
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const SERVICE_ID = "service_0porjrq";
    const TEMPLATE_ID = "template_dofsbbl";
    const USER_ID = "GZMwJaV9Gliwt4JNR";

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID).then(
      (response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setStatusMessage("Thank you! Your message has been sent.");
        setFormData({ to_name: "", from_name: "", message: "" }); // Reset form fields
      },
      (err) => {
        console.error("Failed to send email. Error:", err);
        setStatusMessage("Failed to send message. Please try again later.");
      }
    );
  };
  const [reload, setReload] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setReload((prevReload) => !prevReload);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {reload ? (
        <div data-aos="fade-in"  data-aos-duration="2000" id="Base" className="Base">
          <div className="nav">
            <h2 id="brand" className="brand">
              M D
            </h2>
            <div className="actionBtns">
              <a class="btn btn-primary" href={resume} download>
                {" "}
                <button id="resume" className="resume">
                  {" "}
                  Resume<i class="fas fa-download"></i>
                </button>
              </a>
              <button onClick={handleTheme} className="toggle">
                <i
                  id="modeIcon"
                  className={lightMode ? "fas fa-moon" : "fas fa-sun"}
                >
                  &nbsp;&nbsp;
                </i>
              </button>
            </div>
          </div>

          <div 
           id="wrapper" className="wrapper">
            {count === 0 && (
              <div  className="main-content">
                <div data-aos="fade-out"  data-aos-duration="2000" className="image-container">
                  <img src={profile} alt="profilePic"></img>
                  <p className="name">
                    Madhu Damodhar
                    <br />
                    <span id="highlightRole">
                      void <span id="highlightRole1">role</span>&nbsp;( &nbsp; )
                      &nbsp; &#123;
                      <br />
                      &nbsp;&nbsp;System.out.println ( &nbsp; " &nbsp;
                      <span id="highlightRole1">Full Stack Developer</span> 🖥️ "
                      &nbsp; );
                      <br />
                      &#125;
                    </span>
                  </p>
                </div>

                <div data-aos="fade-in"  data-aos-duration="2000" id="intro-container" className="intro-container">
                  <p className="p">
                    <span className="hello">
                      Hello , <br />
                    </span>
                    <span className="profiletitle">
                      I'm Madhu Damodhar . . !
                    </span>
                    I am a skilled{" "}
                    <span id="highlight" className="highlight">
                      Full Stack Developer
                    </span>{" "}
                    with a primary focus on developing scalable,
                    high-performance backend systems using{" "}
                    <span id="highlight" className="highlight">
                      Java
                    </span>{" "}
                    and{" "}
                    <span id="highlight" className="highlight">
                      Spring Boot
                    </span>
                    . My expertise spans{" "}
                    <span id="highlight" className="highlight">
                      RESTful APIs
                    </span>
                    , <span>microservices architecture</span>, and database
                    management with{" "}
                    <span id="highlight" className="highlight">
                      MySQL , SQL
                    </span>
                    . I am adept at implementing security frameworks like{" "}
                    <span id="highlight" className="highlight">
                      JWT
                    </span>{" "}
                    and{" "}
                    <span id="highlight" className="highlight">
                      Basic Authentication
                    </span>
                    , ensuring secure and efficient application performance.
                    While my core specialization is in backend development, I
                    have a comprehensive understanding of{" "}
                    <span id="highlight" className="highlight">
                      full stack
                    </span>{" "}
                    technologies such as{" "}
                    <span id="highlight" className="highlight">
                      HTML, CSS, JavaScript
                    </span>
                    , and{" "}
                    <span id="highlight" className="highlight">
                      React.js
                    </span>
                    , enabling me to contribute effectively to end-to-end
                    development. This knowledge allows me to ensure smooth
                    integration and collaboration between backend and frontend
                    systems. With my proficiency in{" "}
                    <span id="highlight" className="highlight">
                      Java Full Stack Development
                    </span>
                    , I am ready to apply industry-standard best practices to
                    build robust, scalable solutions that drive business value.
                    Let’s collaborate on creating cutting-edge technology
                    solutions.
                  </p>
                  <button
                    onClick={() => {
                      setCount(5);
                    }}
                    id="hireme"
                    className="hireme"
                  >
                    <i class="fas fa-handshake"></i> Hire Me{" "}
                  </button>
                </div>
              </div>
            )}
            {count === 1 && (
              <div  id="AboutMe" className="AboutMe">
                <img data-aos="fade-out" data-aos-duration="2000"  id="img" src={aboutPic}></img>
                <div data-aos="fade-in"  data-aos-duration="2000"  className="About-Container">
                  <p className="about-para">
                    <span className="aboutMe">
                      About Me <br />
                    </span>
                    <span className="aboutMetitle">
                      {" "}
                      I'm&nbsp;<span className="aboutName">Madhu Damodhar</span>
                      .
                    </span>
                    I am currently pursuing a Master of Computer Applications{" "}
                    <span id="highlight" className="highlight">
                      (MCA)
                    </span>{" "}
                    at the{" "}
                    <span id="highlight" className="highlight">
                      University of Post Graduate College
                    </span>
                    , expecting to graduate in{" "}
                    <span id="highlight" className="highlight">
                      2025
                    </span>
                    . I hold a Bachelor of Science in Computer Science from{" "}
                    <span id="highlight" className="highlight">
                      G. Pulla Reddy Degree & P.G. College
                    </span>
                    , where I achieved a{" "}
                    <span id="highlight" className="highlight">
                      CGPA of 7.13
                    </span>
                    . My technical skills include proficiency in{" "}
                    <span id="highlight" className="highlight">
                      HTML, CSS, JavaScript,
                    </span>{" "}
                    and{" "}
                    <span id="highlight" className="highlight">
                      React.js
                    </span>{" "}
                    for{" "}
                    <span id="highlight" className="highlight">
                      frontend development
                    </span>
                    , along with{" "}
                    <span id="highlight" className="highlight">
                      Java
                    </span>{" "}
                    for{" "}
                    <span id="highlight" className="highlight">
                      backend processing
                    </span>{" "}
                    and{" "}
                    <span id="highlight" className="highlight">
                      MySQL
                    </span>{" "}
                    for{" "}
                    <span id="highlight" className="highlight">
                      database management
                    </span>
                    . I have hands-on experience in using{" "}
                    <span id="highlight" className="highlight">
                      Spring
                    </span>{" "}
                    for building scalable applications and am familiar with{" "}
                    <span id="highlight" className="highlight">
                      Git
                    </span>{" "}
                    for version control. A notable achievement includes
                    developing a comprehensive{" "}
                    <span id="highlight" className="highlight">
                      E-Commerce Website
                    </span>{" "}
                    that integrates both <span>frontend</span> and{" "}
                    <span id="highlight" className="highlight">
                      backend
                    </span>{" "}
                    technologies, enhancing user experience through innovative
                    features. Additionally, I actively contributed to the{" "}
                    <span id="highlight" className="highlight">
                      development and maintenance of the college website
                    </span>
                    , which earned me recognition for my{" "}
                    <span id="highlight" className="highlight">
                      problem-solving abilities
                    </span>
                    . Having completed a{" "}
                    <span>certification in Java Full Stack Technologies</span>{" "}
                    from{" "}
                    <span id="highlight" className="highlight">
                      Quality Thoughts Institute
                    </span>
                    , I am eager to apply my theoretical knowledge in real-world
                    settings. I am currently seeking job opportunities and
                    internships to further develop my skills and contribute
                    meaningfully to projects.
                  </p>
                  <p className="thankyou" id="thankyou">
                    System.out.println ( "&nbsp;
                    <span className="highlightthankyou">
                      Thank you For Visiting
                    </span>
                    " )
                  </p>
                </div>
              </div>
            )}
            {count === 2 && (
              <div data-aos="fade-out"  data-aos-duration="2000"  id="skills-edu" className="skills-edu">
                <div data-aos="fade-out"  data-aos-duration="2000" className="education">
                  <h2 id="skillsheading" className="educationTitle">
                    {" "}
                    Education <i class="fas fa-graduation-cap"></i>
                  </h2>
                  <span>
                    public class{" "}
                    <span className="highlightthankyou">
                      EducationDetails &#123;
                    </span>{" "}
                    <br />
                    &nbsp;&nbsp;public static void{" "}
                    <span className="highlightthankyou">main</span>(String[]
                    args) <span className="highlightthankyou">&#123;</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="highlightthankyou">
                      System.out.println(
                    </span>{" "}
                    Education Details{" "}
                    <span className="highlightthankyou">)</span>;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;String{" "}
                    <span className="highlightthankyou">mca</span> = "{" "}
                    <span style={{ color: "orange" }}>
                      MCA at University of Post Graduate College, Expected
                      Graduation: 2025
                    </span>{" "}
                    ";
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;String{" "}
                    <span className="highlightthankyou">bsc</span> = "{" "}
                    <span style={{ color: "orange" }}>
                      B.Sc. in Computer Science from G. Pulla Reddy Degree &
                      P.G. College, CGPA: 7.13, Graduated: 2023
                    </span>{" "}
                    ";
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;String{" "}
                    <span className="highlightthankyou">intermediate</span> = "{" "}
                    <span style={{ color: "orange" }}>
                      Intermediate (MPC) at Sri Chaitanya Junior Kalasala,
                      Score: 787/1000, Completed: 2020
                    </span>{" "}
                    ";
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;String{" "}
                    <span className="highlightthankyou">schooling</span> = "{" "}
                    <span style={{ color: "orange" }}>
                      Schooling at S.R. High School, CGPA: 8.5, Completed: 2017{" "}
                    </span>
                    ";
                    <br />
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="highlightthankyou">
                      System.out.println(
                    </span>{" "}
                    mca <span className="highlightthankyou">)</span>;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="highlightthankyou">
                      System.out.println(
                    </span>{" "}
                    bsc <span className="highlightthankyou">)</span>;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="highlightthankyou">
                      System.out.println(
                    </span>{" "}
                    intermediate <span className="highlightthankyou">)</span>;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="highlightthankyou">
                      System.out.println(
                    </span>{" "}
                    schooling <span className="highlightthankyou">)</span>;
                    <br />
                    &nbsp;&nbsp;{" "}
                    <span className="highlightthankyou">&#125;</span>
                    <br />
                    <span className="highlightthankyou">&#125;</span>
                  </span>
                  <br></br>
                  <span>
                    <span style={{ color: "orange" }}>Output :</span>
                    <br></br>
                    <span className="highlightthankyou">
                      Education Details :{" "}
                    </span>
                    <span style={{ color: "green" }}>
                      MCA at University of Post Graduate College, Expected
                      Graduation : 2025
                    </span>
                    .<br></br>
                    <span style={{ color: "green" }}>
                      B.Sc. in Computer Science from G. Pulla Reddy Degree &
                      P.G. College, CGPA: 7.13, Graduated: 2023
                    </span>
                    .<br></br>
                    <span style={{ color: "green" }}>
                      Intermediate (MPC) at Sri Chaitanya Junior Kalasala,
                      Score: 787/1000, Completed : 2020
                    </span>
                    .<br></br>
                    <span style={{ color: "green" }}>
                      Schooling at S.R. High School, CGPA: 8.5, Completed: 2017
                    </span>
                    .
                  </span>
                </div>
                <div  className="skills">
                  <h2 id="skillsheading" className="skillsTitle">
                    {" "}
                    Skills <i class="fas fa-tools"></i>
                  </h2>
                  <span>
                    public class{" "}
                    <span className="highlightthankyou">
                      SkillsDetails{" "}
                      <span className="highlightthankyou">&#123;</span>
                    </span>
                    <br />
                    &nbsp;&nbsp;public static void{" "}
                    <span className="highlightthankyou">main</span>(String[]
                    args) <span className="highlightthankyou">&#123;</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="highlightthankyou">
                      System.out.println(
                    </span>{" "}
                    Skills and Expertise{" "}
                    <span className="highlightthankyou">)</span>;<br />
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;String{" "}
                    <span className="highlightthankyou">frontendSkills</span> =
                    "{" "}
                    <span style={{ color: "orange" }}>
                      HTML, CSS, JavaScript, React.js
                    </span>{" "}
                    ";
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;String{" "}
                    <span className="highlightthankyou">backendSkills</span> = "{" "}
                    <span style={{ color: "orange" }}>Java, Spring Boot</span>{" "}
                    ";
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;String{" "}
                    <span className="highlightthankyou">databaseSkills</span> =
                    " <span style={{ color: "orange" }}>MYSQL, SQL</span> ";
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;String{" "}
                    <span className="highlightthankyou">tools</span> = "{" "}
                    <span style={{ color: "orange" }}>Git, Postman</span> ";
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;String{" "}
                    <span className="highlightthankyou">
                      additionalSkills
                    </span>{" "}
                    = "{" "}
                    <span style={{ color: "orange" }}>
                      Problem-solving, Team Collaboration
                    </span>{" "}
                    ";
                    <br />
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="highlightthankyou">
                      System.out.println(
                    </span>{" "}
                    " <span style={{ color: "orange" }}>Frontend Skills :</span>{" "}
                    "+frontendSkills{" "}
                    <span className="highlightthankyou">)</span>;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="highlightthankyou">
                      System.out.println(
                    </span>{" "}
                    " <span style={{ color: "orange" }}>Backend Skill :s</span>{" "}
                    "+backendSkills <span className="highlightthankyou">)</span>
                    ;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="highlightthankyou">
                      System.out.println(
                    </span>{" "}
                    "{" "}
                    <span style={{ color: "orange" }}>
                      {" "}
                      Database Management :
                    </span>{" "}
                    "+databaseSkills{" "}
                    <span className="highlightthankyou">)</span>;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="highlightthankyou">
                      System.out.println(
                    </span>{" "}
                    " <span style={{ color: "orange" }}>Tools :</span>
                    "+tools <span className="highlightthankyou">)</span>;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="highlightthankyou">
                      System.out.println(
                    </span>{" "}
                    "
                    <span style={{ color: "orange" }}>Additional Skills :</span>{" "}
                    "+additionalSkills{" "}
                    <span className="highlightthankyou">)</span>;
                    <br />
                    &nbsp;&nbsp;{" "}
                    <span className="highlightthankyou">&#125;</span>
                    <br />
                    <span className="highlightthankyou">&#125;</span>
                  </span>

                  <span>
                    <br></br>
                    <span style={{ color: "orange" }}>Output :</span>
                    <br></br>
                    <span className="highlightthankyou">
                      Skills and Expertise :{" "}
                    </span>
                    <span className="highlightthankyou">
                      Frontend Skills :{" "}
                    </span>
                    <span style={{ color: "green" }}>
                      HTML, CSS, JavaScript, React.js
                    </span>
                    .<br></br>
                    <span className="highlightthankyou">
                      Backend Technologies :{" "}
                    </span>{" "}
                    <span style={{ color: "green" }}>Java, Spring Boot</span>.
                    <br></br>
                    <span className="highlightthankyou">
                      Database Management :{" "}
                    </span>
                    <span style={{ color: "green" }}>MYSQL, SQL</span>.<br></br>
                    <span className="highlightthankyou">Tools : </span>{" "}
                    <span style={{ color: "green" }}>Git, Postman</span>.
                    <br></br>
                    <span className="highlightthankyou">
                      Additional Skills :{" "}
                    </span>{" "}
                    <span style={{ color: "green" }}>
                      Problem-solving, Team Collaboration
                    </span>
                    .<br></br>
                  </span>
                </div>
              </div>
            )}
            {count === 3 && (
              <div  id="Certifications" className="Certifications">
                <span data-aos="fade-out"  data-aos-duration="2000" className="json">
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="highlightthankyou">&#123;</span> <br />{" "}
                  <span
                    style={{
                      color: "orange",
                      fontSize: "1.5rem",
                      fontWeight: "900",
                      paddingLeft: "10px",
                    }}
                  >
                    "certifications":
                  </span>{" "}
                  <span className="highlightthankyou">[</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="highlightthankyou">&#123;</span> <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="highlightthankyou">"title":</span>{" "}
                  <span style={{ color: "orange" }}>
                    "Java Full Stack Certification"
                  </span>
                  ,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="highlightthankyou">"institution":</span>{" "}
                  "Quality Thoughts Institute",
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="highlightthankyou">"year":</span> "2023",
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="highlightthankyou">
                    "skillsAcquired":
                  </span>{" "}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"In
                  this certification program, I gained comprehensive knowledge
                  of Java and its ecosystem, covering both front-end and
                  back-end development.,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I
                  learned to build dynamic web applications using technologies
                  like Spring Boot for server-side programming and React.js for
                  creating interactive user interfaces., &nbsp;Additionally, the
                  program emphasized best practices in coding, debugging, and
                  deploying applications, enhancing my ability to create
                  efficient, scalable software solutions."
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="highlightthankyou">"Certificate":</span>
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1_78Mow8sZKjVuEQuvE8qHV5I7hiKvNRN/view?usp=sharing"
                  >
                    {" "}
                    Click here{" "}
                  </a>
                  , &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="highlightthankyou">&#125;</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="highlightthankyou">&#123;</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="highlightthankyou">"title":</span>{" "}
                  <span style={{ color: "orange" }}>
                    "College Website Development Contribution Certificate"
                  </span>
                  ,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="highlightthankyou">"institution":</span>{" "}
                  "University of Post Graduate College",
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="highlightthankyou">"year":</span> "2024",
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="highlightthankyou">
                    "skillsAcquired":
                  </span>{" "}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"This
                  certification recognized my contributions to the development
                  of the college website, where I implemented various
                  functionalities and enhanced the site’s overall performance. I
                  learned to integrate multimedia elements and optimize the
                  website for better speed and responsiveness, which is crucial
                  for retaining users. The experience also provided insight into
                  project management and teamwork, as I coordinated with peers
                  to achieve common goals and meet deadlines effectively."
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="highlightthankyou">"Certificate":</span>
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1MzZfcnJ4xmT9LdhVbkG_XbI39IY49gY1/view?usp=sharing"
                  >
                    {" "}
                    Click here{" "}
                  </a>
                  ,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="highlightthankyou">&#125;</span>
                  <br /> &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="highlightthankyou">]</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="highlightthankyou">&#125;</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <br />
                </span>
              </div>
            )}
            {count === 4 && (
              <div  id="ProjectContainer" className="ProjectContainer">
                <h2 className="projectTitle">Projects</h2>
                <div data-aos="fade-out"  data-aos-duration="2000"  className="projects">
                  <div className="project">
                    <img src={eshop}></img>
                    <div className="project-details">
                      <p style={{ textAlign: "justify" }}>
                        <span className="heading">E-Commerce Website</span>{" "}
                        &nbsp;
                        <br></br>
                        &nbsp;<br></br>I built a full-stack e-commerce website
                        using{" "}
                        <span className="highlightthankyou">React.js</span> for
                        the frontend and{" "}
                        <span className="highlightthankyou">Spring Boot</span>{" "}
                        for the backend. Key features include{" "}
                        <span className="highlightthankyou">
                          Product Browsing
                        </span>{" "}
                        ,{" "}
                        <span className="highlightthankyou">Shopping Cart</span>{" "}
                        ,{" "}
                        <span className="highlightthankyou">
                          Order Management
                        </span>{" "}
                        ,{" "}
                        <span className="highlightthankyou">
                          JWT Based Authentication
                        </span>{" "}
                        , and{" "}
                        <span className="highlightthankyou">Rest Api's</span>{" "}
                        for frontend-backend communication.{" "}
                        <span className="highlightthankyou">MYSQL</span> is used
                        for data storage.
                      </p>
                      <button
                        onClick={() => {
                          setCount(8);
                        }}
                        className="view"
                      >
                        <a style={{ textDecoration: "none" }} href="#">
                          view
                        </a>
                      </button>
                    </div>
                  </div>

                  <div className="project">
                    <img src={ems}></img>
                    <div className="project-details">
                      <p style={{ textAlign: "justify" }}>
                        <span className="heading">EMS</span>
                        <br></br> &nbsp; &nbsp;<br></br>I built a full-stack
                        Employee Management System (EMS) using{" "}
                        <span className="highlightthankyou">React.js</span>.This
                        is <span className="highlightthankyou">CRUD</span>-based
                        application and enables{" "}
                        <span className="highlightthankyou">creating</span>,{" "}
                        <span className="highlightthankyou">reading</span>,{" "}
                        <span className="highlightthankyou">updating</span>, and{" "}
                        <span className="highlightthankyou">deleting</span>{" "}
                        employee data, focusing on efficient management of
                        employee details without any authentication
                        requirements.
                      </p>
                      <button
                        onClick={() => {
                          setCount(6);
                        }}
                        className="view"
                      >
                        <a style={{ textDecoration: "none" }} href="#">
                          view
                        </a>
                      </button>
                    </div>
                  </div>

                  <div className="project">
                    <img src={todo}></img>
                    <div className="project-details">
                      <p style={{ textAlign: "justify" }}>
                        <span className="heading">To-Do Web Application </span>
                        <br></br> &nbsp; &nbsp;<br></br>I built a full-stack
                        ToDo app that allows users to{" "}
                        <span className="highlightthankyou">create</span>,{" "}
                        <span className="highlightthankyou">read</span>,{" "}
                        <span className="highlightthankyou">update</span>, and{" "}
                        <span className="highlightthankyou">delete</span> tasks.
                        It efficiently manages task details with a simple user
                        interface, supporting{" "}
                        <span className="highlightthankyou">CRUD</span>{" "}
                        operations without authentication. The application
                        utilizes{" "}
                        <span className="highlightthankyou">React.Js</span>for
                        the front end and{" "}
                        <span className="highlightthankyou">Spring Boot</span>{" "}
                        for the backend.
                      </p>
                      <button
                        onClick={() => {
                          setCount(7);
                        }}
                        className="view"
                      >
                        <a style={{ textDecoration: "none" }} href="#">
                          view
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {count === 5 && (
              <div  id="contact" className="contact">
                <div data-aos="fade-out" data-aos-duration="2000" className="contact__Image">
                  <img
                    src={callWaiting}
                    alt="profile picture"
                    className="contact__img"
                  />
                </div>
                <div data-aos="fade-out" data-aos-duration="2000" className="contact__form">
                  <form id="contactForm" className="form" onSubmit={sendEmail}>
                    <p className="title">Contact Me</p>
                    <p className="message">
                      {statusMessage
                        ? statusMessage
                        : "Please fill out the form below to discuss work opportunities."}
                    </p>
                    <div className="flex">
                      <label>
                        <input
                          className="input"
                          type="text"
                          name="to_name"
                          value={formData.to_name}
                          onChange={handleChange}
                          required
                          autoComplete="off"
                        />
                        <span>Name</span>
                      </label>
                      <label>
                        <input
                          className="input"
                          type="email"
                          name="from_name"
                          value={formData.from_name}
                          onChange={handleChange}
                          required
                          autoComplete="off"
                        />
                        <span>Email</span>
                      </label>
                    </div>
                    <label>
                      <textarea
                        rows="5"
                        cols="7"
                        className="input"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                      />
                      <span>Message</span>
                    </label>
                    <button type="submit" className="submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            )}
            {count === 6 && (
              <div id="ems-container" className="ems-container">
                <div id="ems-header" className="ems-header">
                  <h2>Employee Management System </h2>
                  <span>
                    Project Link:&nbsp;
                    <a
                      style={{ textDecoration: "underline", color: "red" }}
                      href="#"
                    >
                      http://localhost:9090
                    </a>
                  </span>
                </div>
                <div id="summary" className="summary">
                  <img src={emspic}></img>
                  <p id="s-para" className="s-para">
                    <h4>Summary</h4>
                    The Employee Management System (EMS) is a full-featured web
                    application designed to make the management of employee data
                    more efficient and streamlined. It is built using modern
                    technologies like React.js on the frontend and Spring Boot
                    on the backend, ensuring a dynamic and responsive user
                    interface, as well as secure and scalable backend services.
                    This application simplifies complex administrative tasks by
                    allowing HR personnel or administrators to add, update,
                    delete, and search for employees quickly, ensuring effective
                    workforce management. The employee records are stored in a
                    MySQL database, offering a secure and reliable method of
                    data persistence, while Docker is used for seamless
                    deployment across various environments.
                  </p>
                </div>
                <div id="functionalities" className="functionalities">
                  <video autoPlay loop muted>
                    <source src={emsVideo} type="video/mp4" />
                  </video>
                  <p id="f-para" className="f-para">
                    <h4>Employee CRUD Operations</h4>
                    <span className="heading" id="heading">
                      Add Employee :{" "}
                    </span>
                    <span>
                      The application allows users to add new employee records,
                      including details such as employee ID, name, department,
                      role, salary, etc.
                    </span>
                    <br />
                    <span className="heading" id="heading">
                      Update Records :{" "}
                    </span>
                    <span>
                      {" "}
                      Users can easily modify existing employee data through the
                      edit functionality.
                    </span>
                    <br />
                    <span className="heading" id="heading">
                      View Employees :{" "}
                    </span>
                    <span>
                      A list of employees can be viewed in a clean and organized
                      layout with relevant details displayed.
                    </span>
                    <br />
                    <span className="heading" id="heading">
                      Delete Employees :{" "}
                    </span>
                    <span>
                      Unnecessary or outdated employee records can be removed
                      from the system effortlessly.
                    </span>
                    <br />
                    <span className="heading" id="heading">
                      Search & Filter :{" "}
                    </span>
                    <span>
                      Users can search for employees by specific attributes like
                      name, department, or job title.
                    </span>
                  </p>
                </div>
                <div id="backend" className="backend">
                  <img src={docker}></img>
                  <p className="b-para">
                    <h4>Backend Services</h4>
                    <span className="heading" id="heading">
                      RESTful API Architecture :{" "}
                    </span>
                    <span>
                      The backend follows REST standards for API communication
                      between the client (frontend) and the server.
                    </span>
                    <br />
                    <span className="heading" id="heading">
                      MySQL Integration :{" "}
                    </span>
                    <span>
                      {" "}
                      All employee data is stored in a MySQL database, ensuring
                      data persistence and easy retrieval.
                    </span>
                    <br />
                    <span className="heading" id="heading">
                      Docker-ized Database :{" "}
                    </span>
                    <span>
                      {" "}
                      The system utilizes Docker containers to encapsulate and
                      manage the MySQL database, ensuring easy deployment and
                      scaling.
                    </span>
                    <br />
                    <span className="heading" id="heading">
                      Docker Containers :{" "}
                    </span>
                    <span>
                      Both the backend (Spring Boot) and MySQL database are
                      containerized using Docker, simplifying the deployment
                      process across different environments.
                    </span>
                    <br />
                    <span className="heading" id="heading">
                      Hosted on AWS EC2 :{" "}
                    </span>
                    <span>
                      The backend is hosted on Amazon EC2, ensuring high
                      availability and scalability. This setup allows remote
                      access to the system for management and maintenance.
                    </span>
                    <br />
                  </p>
                </div>
              </div>
            )}

            {count === 7 && (
              <div id="ems-container1" className="ems-container">
                <div id="ems-header1" className="ems-header">
                  <h2>Task Master </h2>
                  <span>
                    Project Link:&nbsp;
                    <a
                      style={{ textDecoration: "underline", color: "red" }}
                      href="#"
                    >
                      http://localhost:9090
                    </a>
                  </span>
                </div>
                <div id="summary1" className="summary">
                  <img src={todoimg}></img>
                  <p id="s-para" className="s-para">
                    <h4>Summary</h4>
                    The Task Master Application is a full-stack project designed
                    to simplify task management. Built with React.js on the
                    frontend and Spring Boot on the backend, it offers a
                    seamless experience for users to create, edit, and manage
                    their daily tasks. Users can add new tasks, update details,
                    mark tasks as completed, or delete them as needed. Tasks are
                    stored securely in a MySQL database, ensuring persistence
                    across sessions. The app features a responsive UI, making it
                    accessible on both desktops and mobile devices. With RESTful
                    APIs handling CRUD operations, it allows real-time updates
                    to tasks without refreshing the page. The backend is
                    containerized using Docker, making the app easily deployable
                    and scalable. Overall, the Task Master app is a practical
                    solution for organizing personal or professional tasks
                    efficiently.
                  </p>
                </div>
                <div id="functionalities1" className="functionalities">
                  <video autoPlay loop muted>
                    <source src={todoappVideo} type="video/mp4" />
                  </video>
                  <p id="f-para" className="f-para">
                    <h4>Key Features :</h4>
                    <span className="heading" id="heading1">
                      Task Creation :{" "}
                    </span>
                    <span>
                      Users can create new tasks by entering a task description
                      and optional due date. Each task is added to the list of
                      pending tasks.
                    </span>
                    <br />
                    <span className="heading" id="heading1">
                      Task Viewing and Tracking :{" "}
                    </span>
                    <span>
                      {" "}
                      All tasks are displayed in a neatly structured list,
                      categorized as "Pending" or "Completed" for easy tracking.
                    </span>
                    <br />
                    <span className="heading" id="heading1">
                      Marking Tasks as Completed :{" "}
                    </span>
                    <span>
                      Users can mark tasks as completed when finished. Completed
                      tasks are moved to a separate section, but remain visible
                      for record-keeping.
                    </span>
                    <br />
                    <span className="heading" id="heading1">
                      Task Editing and Updating :{" "}
                    </span>
                    <span>
                      If a task’s details need changes, users can edit the
                      description or due date, allowing for flexible task
                      management.
                    </span>
                    <br />
                    <span className="heading" id="heading1">
                      Task Deletion:{" "}
                    </span>
                    <span>
                      Users can delete tasks they no longer want to keep,
                      helping to maintain a clean and clutter-free list of
                      tasks.
                    </span>
                  </p>
                </div>
                <div id="backend1" className="backend">
                  <img src={tododocker}></img>
                  <p className="b-para">
                    <h4>Backend Services</h4>
                    <span className="heading" id="heading1">
                      MySQL Database Integration :{" "}
                    </span>
                    <span>
                      The application stores tasks in a MySQL database, ensuring
                      data persistence. Tasks are securely stored and retrieved
                      through the backend.
                    </span>
                    <br />
                    <span className="heading" id="heading1">
                      Backend RESTful APIs :{" "}
                    </span>
                    <span>
                      The Spring Boot backend exposes RESTful APIs for handling
                      CRUD operations (Create, Read, Update, Delete). The API
                      layer ensures efficient communication between the frontend
                      and database.
                    </span>
                    <br />
                    <span className="heading" id="heading1">
                      Docker-ized Database :{" "}
                    </span>
                    <span>
                      {" "}
                      The system utilizes Docker containers to encapsulate and
                      manage the MySQL database, ensuring easy deployment and
                      scaling.
                    </span>
                    <br />
                    <span className="heading" id="heading1">
                      Docker Containers :{" "}
                    </span>
                    <span>
                      Both the backend (Spring Boot) and MySQL database are
                      containerized using Docker, simplifying the deployment
                      process across different environments.
                    </span>
                    <br />
                    <span className="heading" id="heading1">
                      Hosted on AWS EC2 :{" "}
                    </span>
                    <span>
                      The backend is hosted on Amazon EC2, ensuring high
                      availability and scalability. This setup allows remote
                      access to the system for management and maintenance.
                    </span>
                    <br />
                  </p>
                </div>
              </div>
            )}
            {count === 8 && (
              <div id="ems-container" className="ems-container">
                <div id="ems-header" className="ems-header">
                  <h2>Ecommerce Web Application ( In Progress ) </h2>
                  <span>
                    Project Link:&nbsp;
                    <a
                      style={{ textDecoration: "underline", color: "red" }}
                      href="#"
                    >
                      http://localhost:9090
                    </a>
                  </span>
                </div>
                <div id="summary" className="summary">
                  <img src={eshopimage}></img>
                  <p id="s-para" className="s-para">
                    <h4>Summary</h4>
                    Eshop.in is a comprehensive e-commerce platform built with
                    React.js for a highly interactive, responsive user interface
                    and Java Spring Boot for a scalable backend architecture.
                    The platform allows users to browse products, manage
                    shopping carts, and process orders effortlessly. It employs
                    custom axios interceptors for secure API calls and
                    integrates with a MySQL database to handle complex CRUD
                    operations efficiently. The project also incorporates modern
                    UI/UX practices for a smooth user experience. Deployed on
                    Vercel and integrated with GitHub for continuous
                    development, it showcases expertise in full-stack
                    development, RESTful services, database integration, and API
                    security.
                  </p>
                </div>
                <div id="functionalities" className="functionalities">
                  <video autoPlay loop muted>
                    <source src={eshopVideo} type="video/mp4" />
                  </video>
                  <p id="f-para" className="f-para">
                    <h4>Employee CRUD Operations</h4>
                    <span className="heading" id="heading">
                      Product Listing :{" "}
                    </span>
                    <span>
                      Displays products fetched from the backend, with filtering
                      and sorting options.
                    </span>
                    <br />
                    <span className="heading" id="heading">
                      Product Details Page :{" "}
                    </span>
                    <span>
                      {" "}
                      Detailed view of each product, including images,
                      descriptions, and pricing.
                    </span>
                    <br />
                    <span className="heading" id="heading">
                      Shopping Cart :{" "}
                    </span>
                    <span>
                      Users can add, remove, and update product quantities, with
                      real-time cart updates.
                    </span>
                    <br />
                    <span className="heading" id="heading">
                      Order Management :{" "}
                    </span>
                    <span>
                      Streamlined order placement process with validation checks
                      for cart items and user information.
                    </span>
                    <br />
                    <span className="heading" id="heading">
                      API Integration :{" "}
                    </span>
                    <span>
                      Axios is used to handle all REST API calls, including
                      secure requests with custom interceptors for
                      authentication..
                    </span>
                  </p>
                </div>
                <div id="backend" className="backend">
                  <img src={eshopdocker}></img>
                  <p className="b-para">
                    <h4>Backend Services</h4>
                    <span className="heading" id="heading">
                      RESTful API Architecture :{" "}
                    </span>
                    <span>
                      The The backend follows REST standards to facilitate
                      seamless communication between the frontend and backend.
                    </span>
                    <br />
                    <span className="heading" id="heading">
                      MySQL Integration :{" "}
                    </span>
                    <span>
                      The application uses MySQL for efficient data management,
                      handling CRUD operations for products, users, and orders.
                    </span>
                    <br />
                    <span className="heading" id="heading">
                      Dockerized Backend :{" "}
                    </span>
                    <span>
                      {" "}
                      Both the Spring Boot backend and MySQL database are
                      containerized using Docker, simplifying deployment and
                      ensuring scalability.
                    </span>
                    <br />
                    <span className="heading" id="heading">
                      Containerized Environment :{" "}
                    </span>
                    <span>
                      The system is fully containerized, allowing easy
                      deployment, management, and scaling across different
                      environments.
                    </span>
                    <br />
                    <span className="heading" id="heading">
                      Hosted on AWS EC2 :{" "}
                    </span>
                    <span>
                      The backend is hosted on Amazon EC2, ensuring high
                      availability and scalability. This setup allows remote
                      access to the system for management and maintenance.
                    </span>
                    <br />
                  </p>
                </div>
                <div id="functionalities" className="functionalities">
                  <video id="ER-DAIGRAM" autoPlay loop muted>
                    <source src={eshopMobile} type="video/mp4" />
                  </video>
                  <p id="f-para" className="f-para">
                    <h4>ER (Entity-Relationship) Diagram </h4>
                    <span className="heading" id="heading">
                      Product Entity :{" "}
                    </span>
                    <span>
                      Represents all products available in the store, including
                      attributes like product name, price, description,
                      category, and stock quantity.
                    </span>
                    <br />
                    <span className="heading" id="heading">
                      User Entity :{" "}
                    </span>
                    <span>
                      Stores user details such as username, password, email, and
                      roles (admin/customer) for authentication and
                      authorization.
                    </span>
                    <br />
                    <span className="heading" id="heading">
                      Order Entity :{" "}
                    </span>
                    <span>
                      Manages all order details, including order ID, order date,
                      and total price. It is linked to the User entity to track
                      who placed the order.
                    </span>
                    <br />
                    <span className="heading" id="heading">
                      OrderItem Entity :{" "}
                    </span>
                    <span>
                      Represents individual items in an order, linking Orders
                      with Products and capturing quantity, price, and subtotal
                      for each item.
                    </span>
                    <br />
                    <span className="heading" id="heading">
                      ShoppingCart Entity :{" "}
                    </span>
                    <span>
                      {" "}
                      Manages the user's cart, allowing products to be added,
                      updated, or removed before placing an order.
                    </span>
                    <br />
                    <span className="heading" id="heading">
                      Relationships :{" "}
                    </span>
                    <span>
                      {" "}
                      One-to-many relationships between Users and Orders, Orders
                      and OrderItems, and Products and Categories for efficient
                      data management and integrity. and Etc..
                    </span>
                  </p>
                </div>
              </div>
            )}
            <div id="icons" className="icons">
              <a
                style={{ backgroundColor: "transparent" }}
                href="#"
                id="facebook-btn"
              >
                <i
                  style={{ backgroundColor: "transparent" }}
                  className="fab fa-facebook"
                ></i>
              </a>
              <a
                style={{ backgroundColor: "transparent" }}
                target="_blank"
                href="https://github.com/MadhuDamodhar"
                id="github-btn"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                style={{ backgroundColor: "transparent" }}
                target="_blank"
                href="https://www.linkedin.com/in/madhu-damodhar/"
                id="linkedin-btn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                style={{ backgroundColor: "transparent" }}
                target="_blank"
                href="https://www.instagram.com/damodhar_gari_abbai/"
                id="instagram-btn"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                style={{ backgroundColor: "transparent" }}
                target="_blank"
                href="https://twitter.com/Madhu_Damodhar"
                id="twitter-btn"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>

            {/* Tooltip component */}
            <Tooltip
              anchorId="facebook-btn"
              content="Visit Facebook"
              place="left"
            />
            <Tooltip
              anchorId="github-btn"
              content="Visit GitHub"
              place="left"
            />
            <Tooltip
              anchorId="linkedin-btn"
              content="Visit LinkedIn"
              place="left"
            />
            <Tooltip
              anchorId="instagram-btn"
              content="Visit Instagram"
              place="left"
            />
            <Tooltip
              anchorId="twitter-btn"
              content="Visit Twitter"
              place="left"
            />
            <Tooltip
              anchorId="hireme"
              content="Open For Jobs and Internships. Hire Me 👍"
              place="top"
            />
            <Tooltip
              anchorId="modeIcon"
              content={lightMode ? "Dark Mode Is On " : "Light Mode Is On "}
              place="bottom"
            />
          </div>

          <div id="bottom" className="bottom">
            <button
              className={count === 0 ? "active" : ""}
              onClick={() => {
                setCount(0);
              }}
            >
              <i
                style={{ backgroundColor: "transparent" }}
                className="fas fa-home"
              ></i>
              &nbsp;
              <span
                style={{ backgroundColor: "transparent" }}
                className="btn-text"
              >
                Home
              </span>
            </button>

            <button
              className={count === 1 ? "active" : ""}
              onClick={() => {
                setCount(1);
              }}
            >
              {" "}
              <i
                style={{ backgroundColor: "transparent" }}
                class="fas fa-user"
              ></i>
              &nbsp;
              <span
                style={{ backgroundColor: "transparent" }}
                className="btn-text"
              >
                About Me
              </span>
            </button>

            <button
              className={count === 2 ? "active" : ""}
              onClick={() => {
                setCount(2);
              }}
            >
              <i
                style={{ backgroundColor: "transparent" }}
                class="fas fa-tools"
              ></i>
              &nbsp;
              <span
                style={{ backgroundColor: "transparent" }}
                className="btn-text"
              >
                Skills/Edu
              </span>
            </button>

            <button
              className={count === 3 ? "active" : ""}
              onClick={() => {
                setCount(3);
              }}
            >
              <i
                style={{ backgroundColor: "transparent" }}
                class="fas fa-medal"
              ></i>
              &nbsp; <span className="btn-text">certifications</span>
            </button>

            <button
              className={
                count === 4 || count === 6 || count === 7 ? "active" : ""
              }
              onClick={() => {
                setCount(4);
              }}
            >
              <i
                style={{ backgroundColor: "transparent" }}
                class="fas fa-project-diagram"
              ></i>
              &nbsp;{" "}
              <span
                style={{ backgroundColor: "transparent" }}
                className="btn-text"
              >
                Projects
              </span>
            </button>

            <button
              className={count === 5 ? "active" : ""}
              onClick={() => {
                setCount(5);
              }}
            >
              <i
                style={{ backgroundColor: "transparent" }}
                class="fas fa-envelope"
              ></i>
              &nbsp;
              <span
                style={{ backgroundColor: "transparent" }}
                className="btn-text"
              >
                Contact
              </span>
            </button>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default App;