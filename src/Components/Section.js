import React, { useState } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { MdModeEditOutline } from 'react-icons/md';
const Section = ({ section, onToggle, onEdit, onMove }) => {
  const { id, name, description } = section;
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const [drag, setDrag] = useState(false);
  const [desc , changeDescState] = useState(false);

  const handleToggle = () => {
    onToggle(section);
  };

  const handleEdit = () => {
    if (editing) {
      if (newName.trim() !== '') {
        onEdit(section, newName);
        setEditing(false);
      }
    } else {
      setEditing(true);
    }
  };

  const handleDrag = () => {
    setDrag(!drag);
  };

  const handleDragStart = (e) => {
    if (drag) {
      e.dataTransfer.setData('text/plain', id);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    const sourceId = e.dataTransfer.getData('text/plain');
    onMove(sourceId, id);
  };

  const handleChange = (e) => {
    setNewName(e.target.value);
  };
  const handleDesc = () => {
    changeDescState(!desc);
  };

  return (
    <div className='Section-container'>
      <div
        className={`section ${drag ? 'dragging' : ''}`}
        draggable={drag}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="Section-details">
          <FaBars size={20} onClick={handleDrag} className='Section-drag' alt='not availabe' />
          <AiOutlineInfoCircle size={30} onMouseEnter={handleDesc}  onMouseLeave={handleDesc} className='Section-description' />
          {desc && <p className='Section-descriptionDetail'>{description}</p>}
          {editing ? (
            <input type="text" value={newName} onChange={handleChange} />
          ) : (
            <h3 className='Section-name'>{name}</h3>
          )}
          <div className='Section-btns'>
            <MdModeEditOutline size={20} onClick={handleEdit} className='Section-edit'></MdModeEditOutline>
            <label class="Section-toggleSwitch" OnClick={handleToggle} >
              <input type="checkbox" />
              <span class="slider" />
            </label>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Section;
