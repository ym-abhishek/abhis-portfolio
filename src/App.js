import './App.css'; // Make sure your CSS is imported

import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Notes from './components/Notes';

function App() {
  return (
    <div>
      {/* Navigation */}
      <nav id="navbar">
        <div className="logo">Portfolio.</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#notes">Notes</a></li>
        </ul>
      </nav>

      {/* Sections */}
      <Home />
      <Skills />
      <Projects />
      <Notes />
      
      {/* Footer */}
      <footer>
        <div className="footer-content">
          <h2>Let's Connect</h2>
          <p>I'm always open to discussing new projects, creative ideas, or opportunities.</p>
          <p className="copyright">&copy; 2026 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;