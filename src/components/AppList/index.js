// import React, { useState } from 'react';
// import photoDispatch from '../../assets/pics/PortfolioDispatch.png';
import photoEats from '../../assets/pics/PortfolioEats.png';
import photoOvercast from '../../assets/pics/PortfolioOvercast.png';
import photoSpar from '../../assets/pics/PortfolioSpar.png';
import photoSticheese from '../../assets/pics/PortfolioSticheese.png';
// import photoTea from '../../assets/pics/PortfolioTea.png';
import project3 from '../../assets/pics/project 3.png'

function AppList() {
    
    return (
        
        <div className='appPic'>
            <a href='https://viewsnvibes.herokuapp.com/'></a>
            <img className='dispatch'
            src={project3}
            alt="dispatch example"
            
            />

            <img className='eats'
            src={photoEats}
            alt='eats example'
            
            />

            <img className='overcast'
            src={photoOvercast}
            alt='overcast example'
            />

            <img className='spar'
            src={photoSpar}
            alt='spar example'
            />

            <img className='sticheese'
            src={photoSticheese}
            alt='sticheese example'
            />

          



        </div>
    )
}

export default AppList;