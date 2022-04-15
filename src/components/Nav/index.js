import React from "react";


function Nav() {
  const  categories = [
    { name: 'Home', description: 'Brings you back to homepage' },
    { name: 'projects', description: 'List of projects' },
    
  ];

  const handleClick = () => {
    console.log("click handled")
  }

  return (
    <header data-testid="header" className="flex-row px-1">
      <h2>
        <a href="/">
           Elmer Reyes
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => handleClick()}>
              About
            </a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick()}>
              Contact
            </span>
          </li>
          {
            categories.map((category) => (
              <li className="mx-1" key={category.name} >
                <span onClick={() => { handleClick(); }}>
                 {(category.name)}
                </span>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}

export default Nav;