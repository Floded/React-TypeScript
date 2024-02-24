import { ContadorReducer } from "./components/ContadorReducer";
import { Counter } from "./components/Counter";
import { Formulario } from "./components/Formulario";
import { TimerPadre } from "./components/TimerPadre";
import { Usuario } from "./components/Usuario";
import { Todo } from "./todo/components/Todo";


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
      
      <hr />
      <h2>useContext - createContext - ContextProvider</h2>
      <hr />

      <Todo/>
    </>
  );
}

export default App;
