import type { ChangeEvent } from "react"
import { State } from "../State/State"
import style from "./Input.module.css"

type StateType = "atrasado" | "concluido"

interface DateProps {
    id: string
    label: string
    value?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    readOnly?: boolean
    state?: {
        text: StateType
        type: StateType
    }
}

export function DateInput({ id, label, state, value, onChange, readOnly }: DateProps) {
    return (
        <div className={`row ${style.prazo}`}>
            <div className={`${style.left}`}>
                <label htmlFor={id}>{label}</label>
                <div className={`row ${style.date}`}>
                    <input
                        type="date"
                        name="date"
                        id={id} 
                        value={value}
                        onChange={onChange}
                        readOnly={readOnly}
                    />
                    <button>
                        <i className="bi bi-calendar-event"></i>
                    </button>
                </div>
            </div>

            {state && <State text={state.text} type={state.type} />}
        </div>
    )
}
