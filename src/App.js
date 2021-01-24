import './App.scss';
import MenuList from './components/menu/MenuList';
import { links } from './data/links';
import React, { useState } from 'react';
import Modal from './components/modal/Modal';

function App() {
  const [hoverStyle, setHoverStyle] = useState('none');
  const [modalOpenStyles, setModalOpenStyles] = useState('');
  const [modalExitStyles, setModalExitStyles] = useState('none');

  const handleStyleChange = () => (
    hoverStyle === 'none'
      ? setHoverStyle('')
      : setHoverStyle('none')
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

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id ornare arcu odio ut sem nulla pharetra. Nulla malesuada pellentesque elit eget gravida cum sociis. Aliquam sem fringilla ut morbi tincidunt augue. Cursus in hac habitasse platea dictumst. Tristique magna sit amet purus gravida quis blandit. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Accumsan sit amet nulla facilisi morbi tempus. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. Eros donec ac odio tempor orci dapibus. In nisl nisi scelerisque eu ultrices vitae auctor eu.

        Scelerisque viverra mauris in aliquam sem. Dictum at tempor commodo ullamcorper. Imperdiet massa tincidunt nunc pulvinar sapien. Blandit turpis cursus in hac habitasse platea dictumst quisque. Cras fermentum odio eu feugiat. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Turpis cursus in hac habitasse platea. Nullam non nisi est sit amet. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Egestas integer eget aliquet nibh praesent tristique magna. Pellentesque elit eget gravida cum sociis. Ultrices sagittis orci a scelerisque purus. Mauris nunc congue nisi vitae. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Morbi tincidunt augue interdum velit euismod in pellentesque.

        Eu scelerisque felis imperdiet proin fermentum leo vel. Ultrices gravida dictum fusce ut placerat orci. In tellus integer feugiat scelerisque varius morbi. Ac turpis egestas maecenas pharetra. Fermentum leo vel orci porta non pulvinar neque. Bibendum arcu vitae elementum curabitur. Sed augue lacus viverra vitae congue eu consequat ac felis. Mi quis hendrerit dolor magna eget est lorem ipsum. Accumsan sit amet nulla facilisi. At tempor commodo ullamcorper a lacus vestibulum. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum.

        Nisl tincidunt eget nullam non nisi est. Nec feugiat nisl pretium fusce id. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. Felis eget velit aliquet sagittis id consectetur purus ut. Morbi non arcu risus quis varius. Vestibulum lectus mauris ultrices eros in cursus turpis. Ut tristique et egestas quis ipsum. At lectus urna duis convallis convallis. Est ultricies integer quis auctor elit sed vulputate. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Volutpat maecenas volutpat blandit aliquam. Fermentum et sollicitudin ac orci phasellus egestas. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Varius duis at consectetur lorem donec.

        Nisi quis eleifend quam adipiscing vitae. Lacus vestibulum sed arcu non odio. Cras pulvinar mattis nunc sed. Sit amet volutpat consequat mauris. Urna cursus eget nunc scelerisque viverra. Amet purus gravida quis blandit. Sapien pellentesque habitant morbi tristique senectus et netus. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Malesuada proin libero nunc consequat. Quis enim lobortis scelerisque fermentum dui. Egestas integer eget aliquet nibh praesent tristique magna sit amet. Amet nisl suscipit adipiscing bibendum. Tempor commodo ullamcorper a lacus vestibulum sed arcu non.
      </p>

    </div>
  );
};

export default App;
