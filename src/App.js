
import React, { useState } from 'react';
import Section from './Components/Section';
import './App.css'
const App = () => {
  const [sections, setSections] = useState([
    {
      id: '1',
      name: 'Profile Summary',
      description: 'overview of a persons professional background, skills, and experiences.',
      active: true,
      modified: false,
    },
    {
      id: '2',
      name: 'Academic and Cocurricular Achievements',
      description: 'Include details about the accomplishments. ',
      active: true,
      modified: false,
    },
    {
      id: '3',
      name: 'Summer Internship Experience',
      description: 'Details about the internship you completed during the summer.',
      active: false,
      modified: false,
    },
    {
      id: '4',
      name: 'Work Experience',
      description: 'Work experience and employment history.',
      active: true,
      modified: false,
    },
    {
      id: '5',
      name: 'Projects',
      description: 'Description of the projects you worked upon.',
      active: true,
      modified: false,
    },
    {
      id: '6',
      name: 'Certifications',
      description: 'Certificates earned by you.',
      active: false,
      modified: false,
    },
    {
      id: '7',
      name: 'Leadership Position',
      description: 'Information about the specific leadership roles.',
      active: true,
      modified: false,
    },
    {
      id: '8',
      name: 'Extracurricular',
      description: 'Information about the extracurricular activities participated in',
      active: true,
      modified: false,
    },
    {
      id: '9',
      name: 'Education',
      description: 'Details about your educational qualification',
      active: false,
      modified: false,
    },
    //We can  add more sections here if we want
  ]);

  const [isModified, setIsModified] = useState(false);

  const handleToggle = (section) => {
    const updatedSections = sections.map((s) => {
      if (s.id === section.id) {
        return { ...s, active: !s.active, modified: true };
      }
      return s;
    });
    setSections(updatedSections);
    setIsModified(true);
  };

  const handleEdit = (section, newName) => {
    const updatedSections = sections.map((s) => {
      if (s.id === section.id) {
        return { ...s, name: newName, modified: true };
      }
      return s;
    });
    setSections(updatedSections);
    setIsModified(true);
  };

  const handleMove = (sourceId, destinationId) => {
    const sourceIndex = sections.findIndex((s) => s.id === sourceId);
    const destinationIndex = sections.findIndex((s) => s.id === destinationId);
    const updatedSections = [...sections];
    const [movedSection] = updatedSections.splice(sourceIndex, 1);
    updatedSections.splice(destinationIndex, 0, movedSection);
    setSections(updatedSections);
    setIsModified(true);
  };

  const handleSave = () => {
    const updatedSections = sections.map((s) => ({ ...s, modified: false }));
    setSections(updatedSections);
    setIsModified(false);
  };

  return (
    <div className='App'>
      <h2 className='App-title'>Select Your Sections</h2>
      <div className='sections'>
        {sections.map((section) => (
          <Section
            key={section.id}
            section={section}
            onToggle={handleToggle}
            onEdit={handleEdit}
            onMove={handleMove}
            onSave={handleSave}
          />
        ))}
      </div>
      <button onClick={handleSave} disabled={!isModified} className='App-saveBtn'>
        Save and Next
      </button>

    </div>
  );
};

export default App;
