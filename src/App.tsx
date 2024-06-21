import { useState } from "react";
import generate_password from "./password-generator";
import "./App.css";

interface Settings {
  lowercase: boolean;
  uppercase: boolean;
  numeric: boolean;
  symbols: boolean;
  length: number;
}

function App() {
  const [config, setConfig] = useState<Settings>({
    lowercase: true,
    uppercase: true,
    numeric: true,
    symbols: true,
    length: 15,
  });

  let password = generate_password(
    config.lowercase,
    config.uppercase,
    config.numeric,
    config.symbols,
    config.length
  );

  return (
    <>
      <h1>Password Generator</h1>
      <h3>{password}</h3>
      <div className="flex-col">
        a-z:{" "}
        <input
          type="checkbox"
          name="lowercase"
          onChange={() =>
            setConfig({
              ...config,
              lowercase: !config.lowercase,
            })
          }
          checked={config.lowercase}
        />
        A-Z:{" "}
        <input
          type="checkbox"
          name="uppercase"
          onChange={() =>
            setConfig({
              ...config,
              uppercase: !config.uppercase,
            })
          }
          checked={config.uppercase}
        />
        0-9:{" "}
        <input
          type="checkbox"
          name="numeric"
          onChange={() =>
            setConfig({
              ...config,
              numeric: !config.numeric,
            })
          }
          checked={config.numeric}
        />
        !@#$%^&*:{" "}
        <input
          type="checkbox"
          name="symbols"
          onChange={() =>
            setConfig({
              ...config,
              symbols: !config.symbols,
            })
          }
          checked={config.symbols}
        />
      </div>
      Length: {config.length}
      <input
        type="range"
        name="length"
        min="3"
        max="99"
        onChange={(e) =>
          setConfig({
            ...config,
            length: parseInt(e.target.value),
          })
        }
      />
    </>
  );
}

export default App;
