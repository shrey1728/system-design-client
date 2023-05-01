import React from "react";
import { IProject } from "./App.types";
import { ProjectItem } from "./ProjectItem";
import './Grid.css';

interface GridProps {
  items: IProject[];
}

export const Grid: React.FC<GridProps> = ({ items }) => {
  return (
    <div className="grid">
      {items.map((i, _) => (
        <ProjectItem item={i} />
      ))}
    </div>
  );
};
