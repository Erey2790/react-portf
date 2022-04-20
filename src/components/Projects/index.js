import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import AppList from '../AppList';



function Projects({ currentCategory }) {
   

   return (
    <section>
      <h1 data-testid="h1tag">App list</h1>
      {/* <p>{description}</p> */}
      <AppList  />
    </section>
  );
}

export default Projects;