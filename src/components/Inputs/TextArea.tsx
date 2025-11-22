import type { ChangeEvent } from "react"
import style from "./Input.module.css"

interface TextAreaProps {
    id: string
    label: string
    value?: string
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
    readOnly?: boolean
}

export function TextArea({ id, label, onChange, readOnly, value }: TextAreaProps) {
    return (
        <div className={`${style.container}`}>
            <label htmlFor={id}>{label}</label>
            <textarea
                name="description"
                id={id}
                placeholder="Digite aqui a descrição da tarefa"
                onChange={onChange}
                value={value}
                readOnly={readOnly}
            />
        </div>
    )
}