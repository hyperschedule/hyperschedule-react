import React from 'react';

import ModeSelector from './ModeSelector/ModeSelector';
import ModeContent from './ModeContent/ModeContent';
import CourseDescription from './CourseDescription/CourseDescription';
import SelectedCourses from './SelectedCourses/SelectedCourses';
import Controls from './Controls/Controls';


import './App.css';

const App = () => {
  return (
    <div className="columns">
      <div className="mode column">
        <div className="selector container">
          <ModeSelector/>
        </div>
        <div className="content container">
          <ModeContent/>
        </div>
      </div>
      <div className="sidebar column">
        <Controls/>
        <CourseDescription/>
        <SelectedCourses/>
      </div>
    </div>
  );
};

export default App;
