import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Models from './components/Models/Models';
import Search from './components/search/Search';
import Select from './components/selects/Select';
import ImgSlide  from './components/ImgSlide/ImgSlide';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div> 
      <Navbar />
      <Hero />
      <Models />
      <Search />
      <Select />
      <ImgSlide />
      <Footer />
    </div>
  );
}

export default App;
