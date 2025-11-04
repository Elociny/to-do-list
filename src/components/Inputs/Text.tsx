import style from "./Input.module.css"

interface TextProps {
    id: string
    label: string
}

export function Text({ id, label }: TextProps) {
    return(
        <div className={`${style.container}`}>
            <label htmlFor={ id }>{ label }</label>
            <input type="text" id={ id } placeholder="Digite o título da tarefa aqui" />
        </div>
    )
}