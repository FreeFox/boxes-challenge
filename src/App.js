import './App.css';
import React from 'react';
import Boxes from './Boxes';
import Box from './Box';

function App (props) {
  var [boxes, setBoxes] = React.useState(Boxes);

  function toggleBox(id) {
    setBoxes(prevBoxes => {
      return prevBoxes.map((box) => {
        if (box.id === id) {
          return {
            ...box,
            on: !box.on
          };
        } else {
          return box;
        }
      });
    });
  }

  var boxElements = boxes.map(box => (<Box key={box.id} id={box.id} on={box.on} toggle={toggleBox}/>));

  return (
    <div className="App">
      {boxElements}
    </div>
  );
}

export default App;
