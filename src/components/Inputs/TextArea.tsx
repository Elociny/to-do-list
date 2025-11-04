import style from "./Input.module.css"

interface TextAreaProps {
    id: string
    label: string
}

export function TextArea({ id, label }: TextAreaProps) {
    return(
        <div className={`${style.container}`}>
            <label htmlFor={ id }>{ label }</label>
            <textarea name="description" id={ id } placeholder="Digite aqui a descrição da tarefa" />
        </div>
    )
}