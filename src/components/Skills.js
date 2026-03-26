import { useEffect, useRef } from 'react';

const Skills = () => {
  // Array of refs to store our progress bar elements
  const progressBarsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetWidth = entry.target.getAttribute('data-width');
          entry.target.style.width = targetWidth;
        }
      });
    }, { threshold: 0.5 });

    // Observe each progress bar
    progressBarsRef.current.forEach(bar => {
      if (bar) observer.observe(bar);
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  const skillsData = [
    { name: 'Python', icon: 'fab fa-python', width: '85%' },
    { name: 'SQL & Databases', icon: 'fas fa-database', width: '85%' },
    { name: 'NumPy & Pandas', icon: 'fas fa-table', width: '80%' },
    { name: 'Matplotlib & Seaborn', icon: 'fas fa-chart-area', width: '75%' },
    { name: 'Tableau & Power BI', icon: 'fas fa-chart-pie', width: '75%' },
    { name: 'Excel', icon: 'fas fa-file-excel', width: '90%' },
    { name: 'PySpark', icon: 'fas fa-bolt', width: '65%' },
    { name: 'Linux & Unix Support', icon: 'fab fa-linux', width: '85%' },
    { name: 'ITSM (Jira, ServiceNow, Confluence)', icon: 'fas fa-tasks', width: '80%' },
  ];

  return (
    <section id="skills" className="section alt-bg">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        
        {skillsData.map((skill, index) => (
          <div className="skill-item" key={index}>
            <i className={`${skill.icon} skill-icon`}></i>
            <div className="skill-info">
              <span>{skill.name}</span>
              <div className="progress-container">
                <div 
                  className="progress-bar" 
                  data-width={skill.width}
                  ref={el => progressBarsRef.current[index] = el}
                ></div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;