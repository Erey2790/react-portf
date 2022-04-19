import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
// import profilePic from './assets/pics/image0y.jpeg';

function App() {

  return (
    <div>
      {/* <img src={profilePic} className="App-logo" alt="logo" /> */}
      <Nav />
      <main>
          <About />        
      </main>
    </div>
  );
}

export default App;
