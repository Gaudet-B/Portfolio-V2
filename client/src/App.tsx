import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query/src'

import Landing from './components/Landing'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Pizza from './components/Pizza/pizza/Pizza'

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <div id="App" className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/p!zza" element={<Pizza />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  )
}

export default App
