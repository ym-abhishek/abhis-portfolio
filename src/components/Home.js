// 1. You MUST import the image file at the very top
import myPic from '../assets/dp_w2.png';

const Home = () => {
  return (
    <section id="home" className="section">
      <div className="home-content">
        <div className="text-content">
          <h1>Hi, I'm <span className="highlight">Abhishek Y M</span></h1>
          <h3>Data Analyst & Data Engineer</h3>
          <p>Welcome to my portfolio. I am passionate about solving complex problems, analyzing data, and building efficient solutions. Constantly learning and adapting to new technologies.</p>
          <div className="social-links">
            <a href="mailto:ymabhi12@gmail.com"><i className="fas fa-envelope"></i></a>
            <a href="https://github.com/ym-abhishek" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://linkedin.com/in/ymabhishek" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="image-content">
          {/* 2. Use the imported variable name inside curly braces (no quotes!) */}
          <img src={myPic} alt='' className="profile-pic" />
        </div>
      </div>
    </section>
  );
};

export default Home;