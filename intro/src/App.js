import './App.css';
import React,{createContext} from 'react'
import {data} from './data'
import StikyHeader from './components/StikyHeader';
import Headermain from './components/Headermain';
import Categories from './components/Categories';
import Iframe from './components/Iframe';
import Section from './components/Section';
import Butttons from './components/Butttons';
import Footer from './components/Footer';


export const DataContext = createContext()

function App() {

  return (   
   
    // Provider vasitesiyle data -ni child componentlere gondermisem
    <DataContext.Provider  value={data}>
        <div className="App">
            <StikyHeader/>
            <Headermain/>
            <Categories />
            <Iframe/>
            <Section/> 
           <Butttons/>  
           <Footer/> 
            
        </div>
    </DataContext.Provider>

  );
}

export default App;
