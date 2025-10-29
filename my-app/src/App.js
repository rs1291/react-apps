import React from "react";
import ReactDOM from "react-dom/client";

class Chocolate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Dark Chocolate",
      price: 100,
      toppings: "No",
      brand: "Dairy Milk",
    };
  }

  namechange = () => {
    const newname = this.state.name === "Dark Chocolate"
      ? "Milk Chocolate"
      : "Dark Chocolate";

    const newprice = this.state.name === "Dark Chocolate" ? 150 : 100;

    const newtoppings =
      this.state.name === "Dark Chocolate" ? "Fruit and Nut" : "No";

    this.setState({
      name: newname,
      price: newprice,
      toppings: newtoppings,
    });
  };

  render() {
    return (
      <div style={{ fontFamily: "Arial", padding: "20px" }}>
        <h1>Details of {this.state.name}</h1>
        <p>My name is {this.state.name}</p>
        <p>My price is {this.state.price}</p>
        <p>I have {this.state.toppings} toppings</p>
        <p>I'm from {this.state.brand} brand</p>
        <button onClick={this.namechange}>Change Chocolate</button>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Chocolate />);
