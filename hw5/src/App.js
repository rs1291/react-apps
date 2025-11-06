import React from 'react';
import ReactDOM from 'react-dom';

class Food extends React.Component {
  constructor(props) {
    super(props);
    // Create a reference for the input field
    this.ageRef = React.createRef();
  }

  // Function to handle submit
  mysubmit = () => {
    const age = this.ageRef.current.value;
    if (age >= 18) {
      alert("Login Successful");
    } else {
      alert("Not Eligible to login");
    }
  };

  render() {
    return (
      <div className="form-group" style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>I am {this.props.type} type Food. People love me!</h2>
        <label htmlFor="age">Enter your Age:</label><br />
        <input
          type="number"
          id="age"
          ref={this.ageRef}
          placeholder="Enter your Age"
          style={{ margin: "10px", padding: "5px" }}
        /><br />
        <button onClick={this.mysubmit}>Submit</button>
      </div>
    );
  }
}

// Create the component instance with props
const mycode = <Food type="Continental" />;

// Render into the DOM
ReactDOM.render(mycode, document.getElementById('root'));
