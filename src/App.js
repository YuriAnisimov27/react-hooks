import React from 'react';
import {Navbar} from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <div className="container pt-4">
        <h1>Hello World</h1>
      </div>
    </React.Fragment>
  );
}

export default App;