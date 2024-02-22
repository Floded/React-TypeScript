import { ChangeEvent, useState } from "react";

export const useForm = <T extends Object>(initState: T) => {
    const [formulario, setFormulario] = useState(initState)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target;
        setFormulario({
            ...formulario,
            [name]: value,
        })
    }
    return {
        formulario,
        handleChange
    }
}