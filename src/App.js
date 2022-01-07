import React from 'react';

import './App.css'


import MainBody from './components/MainBody';
import Title from './components/Title';
import Footer from './components/Footer';

import LeftSidebar from './components/LeftSidebar';                                                             

const App = () => {





  return (
    <div >

        <Title/>
      <div className='AppBody'>
        
        <div >
            <LeftSidebar/>
        </div>

        <div>
            <MainBody/>
        </div>
      </div>

      <div>
          <Footer/>

        </div>

    </div>
  );
};

export default App;