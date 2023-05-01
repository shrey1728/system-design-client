import React from 'react';
import { IProject } from './App.types';
import './ProjectItem.css';

interface ProjectItemProps {
    item: IProject;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ item }) => {
  return (
    <div className='grid-item'>
      <h3>{item.title}</h3>
      <p className='para'>{item.description}</p>
      <button className='primary-button' onClick={item.onClick}>Open</button>
    </div>
  );
};