import './App.scss';
import MenuList from './components/menu/MenuList';
import { links } from './data/links';
import React, { useState } from 'react';

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
        <button onClick={handleModalOpenStyles} className={modalOpenStyles}>Click to open modal</button>

        <section className={modalExitStyles}>
          <p className='modal-content'>
            <span className='modal-exit' onClick={handleModalExitStyles}>X</span>
          Modal content
          </p>
        </section>
      </section>
    </div>
  );
};

export default App;
