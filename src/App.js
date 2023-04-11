import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Abouts from "./components/about";
import Blogs from "./components/blog";
import Contacts from "./components/contact";
import Footer from "./components/footer";
import Filter from "./components/gallery";
import Header from "./components/header";
import Offers from "./components/offers";
import Home from "./components/home"
import Preloader from "./components/preloader";

function App() {
  return (
    <div className="App">
      <Preloader/>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Abouts/>}/>
        <Route path='/offers' element={<Offers/>}/>
        <Route path='/gallerys' element={<Filter/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;