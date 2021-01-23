import './App.css';
import MenuList from './components/MenuList';
import { links } from './data/links'
import React, { useState } from 'react'

function App() {
  const [hoverStyle, setHoverStyle] = useState('hidden')

  const handleMouseOver = () => setHoverStyle('')
  const handleMouseLeave = () => setHoverStyle('hidden')

  return (
    <div className="App">
      <header className="App-header">
        <p onMouseOver={handleMouseOver}>Hover</p>
        <div className={hoverStyle} id='menu' onMouseLeave={handleMouseLeave}>
          <MenuList allLinks={links} />
        </div>
      </header>
    </div>
  );
}

export default App;
