import './App.css';
import MenuList from './components/MenuList';
import { links } from './data/links'
import React, { useState } from 'react'

function App() {
  const [hoverStyle, setHoverStyle] = useState('hidden')
  console.log(hoverStyle, 'hover style on load')

  const handleHoverStyle = () => {
    console.log('handleHoverStyle')
    setHoverStyle('')
  }

  return (
    <div className="App">
      <header className="App-header">
        <p onMouseOver={handleHoverStyle}>Hover</p>
        <div className={hoverStyle} >
          <MenuList allLinks={links} />
        </div>
      </header>
    </div>
  );
}

export default App;
