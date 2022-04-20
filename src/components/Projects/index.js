import React from 'react';


function Projects(props) {
    const currentCategory = {
        name: 'commercial',
        description: 'descripcion'
    }

    return (
        <section>
            <h1>{currentCategory.name}</h1>
            <p>{currentCategory.name}</p>
      
        </section>
    );
}

export default Projects;