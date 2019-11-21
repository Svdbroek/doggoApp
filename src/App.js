import React from 'react';
import './App.css';
import DogsListContainer from './Components/DoglistContainer';
import { Route } from "react-router-dom";
import DogBreedImagesContainer from './Components/DogbreedImagesContainer';


function App() {
  return (
    <div className="App">
      <main>
      <Route exact path="/" component={DogsListContainer} />
      <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />

      </main>
    </div>
  );
}

export default App;
