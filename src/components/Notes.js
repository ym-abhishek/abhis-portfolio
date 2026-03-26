import React from 'react';

const Notes = () => {
  return (
    <section id="notes" className="section alt-bg">
      <h2 className="section-title">My Notes & Resources</h2>
      <p style={{ textAlign: 'center', color: 'var(--text-gray)', marginBottom: '2rem' }}>
        A collection of my learning notes and useful resources.
      </p>
      <div className="notes-container">
        <a href="#link1" className="note-box">
          <i className="fas fa-file-pdf"></i>
          <span>Statistics Cheat Sheet</span>
        </a>
        <a href="#link2" className="note-box">
          <i className="fas fa-book"></i>
          <span>Unix Commands Guide</span>
        </a>
        <a href="#link3" className="note-box">
          <i className="fas fa-code"></i>
          <span>Generative AI Basics</span>
        </a>
      </div>
    </section>
  );
};

export default Notes;