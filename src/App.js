
import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {

  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  // eslint-disable-next-line 
  const [height, setHeight] = useState(2)
  

  return (
    <Router>
      <LoadingBar color='#f11946' progress={progress} height={height} />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" heading="Breaking News" pageSize="6" country="us" category="general" />} />
        <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" heading="News - Entertainment" pageSize="6" country="us" category="entertainment" />} />
        <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" heading="News - Health" pageSize="6" country="us" category="health" />} />
        <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" heading="News - Science" pageSize="6" country="us" category="science" />} />
        <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" heading="News - Sports" pageSize="6" country="us" category="sports" />} />
        <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" heading=" News - Technology" pageSize="6" country="us" category="technology" />} />
      </Routes>
    </Router>

  )

}

export default App