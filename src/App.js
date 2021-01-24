import './App.scss';
import MenuList from './components/menu/MenuList';
import { links } from './data/links';
import React, { useState } from 'react';

function App() {
  const [hoverStyle, setHoverStyle] = useState('hidden');

  const handleStyleChange = () => (
    hoverStyle === 'hidden'
      ? setHoverStyle('')
      : setHoverStyle('hidden')
  );

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
        <button>Click to open modal</button>
        <p>Modal content</p>
      </section>
    </div>
  );
};

export default App;
