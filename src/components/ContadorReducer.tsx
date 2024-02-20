import { useReducer } from "react";

const initalState = {
    contador: 0
}

type ActionType = 
    | {type: 'incrementar'}
    | {type: 'decrementar'}
    | {type: 'incrementar 10'}
    | {type: 'custom', payload: number}
    | {type: 'Reset'};

const contadorReducer = (state: typeof initalState , action: ActionType) => {

    switch (action.type) {
        case 'incrementar':
            return {
                ...state,
                contador: state.contador + 1
            }
        case 'decrementar':
            return {
                ...state,
                contador: state.contador -1
            }
            case 'custom':
            return {
                ...state,
                contador: action.payload
            }
        case 'incrementar 10':
            return {
                ...state,
                contador: state.contador + 10
            }
        case 'Reset': 
            return initalState
        default:
            return state
    }

}

export const ContadorReducer = () => {
    const [ contadorState, dispatch] = useReducer( contadorReducer, initalState)
  return (
    <>
        <h3>Contador: {contadorState.contador}</h3>
        <button className="btn btn-outline-primary" onClick={() => {dispatch({type: 'incrementar'})}}>
            +1
        </button>
        <button className="btn btn-outline-primary" onClick={() => {dispatch({type: 'decrementar'})}}>
            -1
        </button>
        <button className="btn btn-outline-primary" onClick={() => {dispatch({type: 'incrementar 10'})}}>
            +10
        </button>
        <button className="btn btn-outline-danger" onClick={() => {dispatch({type: 'custom', payload: 100})}}>
            100
        </button>
        <button className="btn btn-outline-danger" onClick={() => {dispatch({type: 'Reset'})}}>
            Reset
        </button>
    </>
  )
}
