import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
// import profilePic from './assets/pics/image0y.jpeg';

function App() {

  return (
    <div>
      <Nav></Nav>
      <main>
        <Projects></Projects>
          <About />        
      </main>
    </div>
  );
}

export default App;
