import { useState } from "react";

interface User  {
    userId: string;
    name: string
}

const tempUser: User = {
    userId: 'AG525',
    name: 'Marisa'
}

export const Usuario = () => {
    const [ user, setUser ] = useState<User>()

    const login = () => {
        setUser({
        userId: 'AB123',
        name: 'Luis'
    })

}
  return (
    <div className="mt-5">
        <h3>Usuario: </h3>
        <button onClick={login} className="btn btn-outline-primary">
            Login
        </button>
        {
            (!user) ?  
            <pre>No hay usuario</pre>
            :
            <pre>{JSON.stringify(user)}</pre>
            
        }
    </div>
  )
}
