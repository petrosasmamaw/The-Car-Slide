import './App.css'
import { useState, useEffect } from 'react';
import Background from './Components/Background/Background.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';

function App() {
    let heroData = [
        {text1:"Dive into", text2:"what you love"},
        {text1:"Indulge", text2:"your passion"},
        {text1:"give in to", text2:"your desires"}
    ]
    const [heroCount, setHeroCount] = useState(2)
    const [playStatus, setPlayStatus] = useState(false)

    useEffect(() => {
      setInterval(() => {
            setHeroCount((count)=> {return count===2?0:count+1});
        }, 3000);
    }, []);
    return (
        <div className="App">
        <Background playStatus={playStatus} heroCount={heroCount} />
        <Navbar />
        <Hero 
               setPlayStatus={setPlayStatus}
               heroData={heroData}
               heroCount={heroCount}
               setHeroCount={setHeroCount}
               playStatus={playStatus}
               />
            
        </div>
    );
  
}

export default App
