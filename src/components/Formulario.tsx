import { useForm } from "../hooks/useForm";

export const Formulario = () => {


                // Estas lineas las reemplazamos con nuestro Custom Hook 
    // const [formulario, setFormulario] = useState({
    //     email: '',
    //     nombre: ''
    // })

    // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     const {value, name} = event.target;
    //     setFormulario({
    //         ...formulario,
    //         [name]: value,
    //     })
    // }

    interface FormData {
        email: string;
        nombre: string
    }


                    // Custom HOOK
    const {formulario, handleChange} = useForm<FormData>({
        email: 'luis@example.com',
        nombre: 'Luis'
    })



  return (
    <form>
        <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email"
                   className="form-control"
                   name="email"
                   value={formulario.email}
                   onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input type="text" 
                   className="form-control"
                   name="nombre"
                   value={formulario.nombre}
                   onChange={handleChange} />
        </div>

        <pre>{JSON.stringify(formulario)}</pre>
    </form>
  )
}
