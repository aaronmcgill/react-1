import React from "react";
import colors from "./common/colors";
import "./app.scss";

class AppClass extends React.Component {
  constructor(props) {
    super();
    console.log("hi from constructor");
    this.state = {
      currentIndexColor: 0,
    };
  }

  componentDidMount() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    console.log(randomIndex);
    document.body.style.backgroundColor = colors[randomIndex];
    this.setState({ currentIndexColor: randomIndex });
  }

  render() {
    console.log("hi from render");
    return (
      <div id="app">
        <h1 id="current-color">{colors[this.state.currentIndexColor]}</h1>

        <div className="colors">
          {colors.map((color, i) => (
            <button
              key={`color-${i}`}
              style={{
                backgroundColor: color,
              }}
              className={i === this.state.currentIndexColor ? "active" : ""}
              onClick={() => {
                document.body.style.backgroundColor = color;
                this.setState({ currentIndexColor: i });
                console.log(`clicked ${i}`);
              }}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default AppClass;
