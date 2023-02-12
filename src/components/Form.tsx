
interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const Form:React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  return (
    <form className='form-input' onSubmit={handleAdd}> 
        <input 
            type='input'
            placeholder='Enter the task' 
            value={todo}
            onChange={(e) => setTodo(e.target.value)} />
        <button type='submit' className='btn-submit'>Add</button>
    </form>
  )
}

export default Form