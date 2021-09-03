import React from "react";
import Nemo from "./Nemo.js"



class App extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Nemo/>
      </div>
    );
  }
}



export default App;