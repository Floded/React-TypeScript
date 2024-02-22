import { ContadorReducer } from "./components/ContadorReducer";
import { Counter } from "./components/Counter";
import { Formulario } from "./components/Formulario";
import { TimerPadre } from "./components/TimerPadre";
import { Usuario } from "./components/Usuario";


function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />
      <h2>useState</h2>
      <hr />

      <Counter/>

      <Usuario/>

      <hr />
      <h2>useEfect - useRef</h2>
      <hr />

      <TimerPadre/>

      <hr />
      <h2>useReducer</h2>
      <hr />

      <ContadorReducer/>

      <hr />
      <h2>customHooks</h2>
      <hr />

      <Formulario/>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
