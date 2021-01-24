import './App.scss';
import MenuList from './components/menu/MenuList';
import { links } from './data/links';
import React, { useState } from 'react';
import Modal from './components/modal/Modal';

function App() {
  const [hoverStyle, setHoverStyle] = useState('hidden');
  const [modalOpenStyles, setModalOpenStyles] = useState('');
  const [modalExitStyles, setModalExitStyles] = useState('hidden');

  const handleStyleChange = () => (
    hoverStyle === 'hidden'
      ? setHoverStyle('')
      : setHoverStyle('hidden')
  );

  const handleModalOpenStyles = () => {
    setModalOpenStyles('hidden')
    setModalExitStyles('')
  };

  const handleModalExitStyles = () => {
    setModalOpenStyles('')
    setModalExitStyles('hidden')
  }

  return (
    <div className="App">
      <header className="App-header">
        <p onMouseOver={handleStyleChange} className='links'>Links</p>
        <div className={hoverStyle} id='menu' onMouseLeave={handleStyleChange}>
          <MenuList allLinks={links} />
        </div>

      </header>

      {/* MODAL */}
      <section className='modal'>
        <Modal
          modalOpenStyles={modalOpenStyles}
          handleModalOpenStyles={handleModalOpenStyles}
          modalExitStyles={modalExitStyles}
          handleModalExitStyles={handleModalExitStyles}
        />
      </section>
    </div>
  );
};

export default App;
