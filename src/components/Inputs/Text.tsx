import type { ChangeEvent } from "react"
import style from "./Input.module.css"

interface TextProps {
    id: string
    label: string
    placeholder: string
    value?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    readOnly?: boolean
}

export function Text({ id, label, placeholder, value, onChange, readOnly }: TextProps) {
    return (
        <div className={`${style.container}`}>
            <label htmlFor={id}>{label}</label>
            <input
                type="text"
                id={id}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                readOnly={readOnly} 
            />
        </div>
    )
}