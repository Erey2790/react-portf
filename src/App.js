import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
// import profilePic from './assets/pics/image0y.jpeg';
import ContactForm from './components/Contact';


function App() {

  const [contactSelected, setContactSelected] = useState(false)

  const  [categories] = useState ([
    { name: 'Projects', description: 'A list of my projects I have worked on so far' },
    
    { name: 'Resume', description: 'Download resume here' }

  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
          <Projects></Projects>
          <About /> 
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
               
      </main>
    </div>
  );
}

export default App;
