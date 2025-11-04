import { State } from "../State/State"
import style from "./Input.module.css"

type StateType = "atrasado" | "concluido"

interface DateProps {
    id: string
    label: string
    state?: {
        text: StateType
        type: StateType
    }
}

export function Date({ id, label, state }: DateProps) {
    return (
        <div className={`row ${style.prazo}`}>
            <div className={`${style.left}`}>
                <label htmlFor={id}>{label}</label>
                <div className={`row ${style.date}`}>
                    <input type="date" name="date" id={id} />
                    <button>
                        <i className="bi bi-calendar-event"></i>
                    </button>
                </div>
            </div>

            {state && <State text={state.text} type={state.type} />}
        </div>
    )
}
