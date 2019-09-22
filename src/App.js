import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader'

import Main from './containers/Main'
import About from './containers/About'
import Footer from './containers/Footer'
import Body from './styled/Body'

function App() {
  const [isMobile, setIsModile] = useState(window.innerWidth <= 1000)

  const handleWindowSizeChange = () => {
    setIsModile(window.innerWidth <= 1000)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

  }, [])
  return (
    <Body>
      <Main isMobile={isMobile} />
      <About isMobile={isMobile} />
      <Footer isMobile={isMobile} />
    </Body>
  );
}

export default hot(module)(App);
