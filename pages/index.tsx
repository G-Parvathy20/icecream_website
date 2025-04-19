// pages/index.tsx
import React from 'react';
import { ReactDOM } from 'react';
import Navbar from '@/components/Navbar/Navbar'; // Import your Navbar component here
import Flavour from '@/components/Flavour/Flavour';
import Content from '@/components/Navbar/Content';
import { BrowserRouter } from "react-router-dom";
import InputWithLabel from '@/components/Flavour/Contact';
import Footer from '@/components/Navbar/Footer';

const HomePage: React.FC = () => {
  return (
    <>
    <div>
      <Navbar />
      <Content />
      <Flavour />
      <InputWithLabel/>
      <Footer/>
    </div>
    </>
  );
};

export default HomePage;
