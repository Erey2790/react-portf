import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
// import profilePic from './assets/pics/image0y.jpeg';
import ContactForm from './components/Contact';

function App() {
  const  [categories] = useState ([
    { name: 'Projects', description: 'A list of my projects I have worked on so far' },
    { name: 'Contact', description: 'Contact me' },
    { name: 'Resume', description: 'Download resume here' }

  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      ></Nav>
      <main>
        <ContactForm></ContactForm>
        <Projects></Projects>
          <About />        
      </main>
    </div>
  );
}

export default App;
