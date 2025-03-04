import { useState, useEffect } from 'react'
import Bio from './components/Bio'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Supports weights 100-900
import '@fontsource-variable/inter-tight';

function App() {
  useEffect(() => {
    document.title = "Rey's Bio";
  }, []);

  return (
    <Bio />
  )
}

export default App
