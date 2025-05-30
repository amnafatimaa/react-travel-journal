import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/MainContent";
import data from './data.js'

function App() {
  return (
    <>
      <Header />
      {data.map((location) => (
        <Main
          key={location.id}
          img={location.img}
          title={location.title}
          country={location.country}
          googleMapsLink={location.googleMapsLink}
          dates={location.dates}
          text={location.text}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
