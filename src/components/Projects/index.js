import React from 'react';
import photo from '../../assets/pics/smallerImageBlue.jpeg'

function Projects(props) {
    const currentCategory = {
        name: 'commercial',
        description: 'descripcion'
    }

    return (
        <section>
            <h1>{currentCategory.name}</h1>
            <p>{currentCategory.name}</p>
            <div>
                <img
                    src={photo}
                    alt="My dog Blue"
                    className='img-thumbnail mx-1'
                    />
            </div>
        </section>
    );
}

export default Projects;