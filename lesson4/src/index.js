import React from 'react';
import { createRoot } from 'react-dom/client';

class MyStyling extends React.Component {
  render() {
    const myheaderstyle = {
      color: "green",
      backgroundColor: "skyblue",
      fontFamily: "Airal",
      padding: "5px",
    };
    const mystyle = {
      color: "blue",
      backgroundColor: "pink",
      fontFamily: "Times New Roman",
      padding: "10px",
    };
    return (
      <div>
        <h1 style={myheaderstyle}>Hi</h1>
        <p style={mystyle}>How are you</p>
      </div>
    );
  }
}

const root = createRoot(document.getElementById('root'));
root.render(<MyStyling />);