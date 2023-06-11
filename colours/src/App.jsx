import { useEffect, useState } from "react";
import colors from "./common/colors";
import "./app.scss";

function App() {
  const [state, setState] = useState({ currentIndexColor: 0 });

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
    setState({ currentIndexColor: randomIndex });
  }, []);

  return (
    <div id="app">
      <h1 id="current-color">{colors[state.currentIndexColor]}</h1>

      <div className="colors">
        {colors.map((color, i) => (
          <button
            key={`color-${i}`}
            style={{ backgroundColor: color }}
            className={i === state.currentIndexColor ? "active" : ""}
            onClick={() => {
              document.body.style.backgroundColor = color;
              setState({ currentIndexColor: i });
            }}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default App;
