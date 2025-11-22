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
    
    const calcularEstadoAutomatico = () => {
        if (state) return state;

        if (!value) return null;

        const hoje = new Date().toISOString().split('T')[0];

        if (value < hoje) {
            return { text: "atrasado", type: "atrasado" } as const;
        }

        return null;
    };

    const estadoParaMostrar = calcularEstadoAutomatico();

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
                    <button type="button">
                        <i className="bi bi-calendar-event"></i>
                    </button>
                </div>
            </div>

            {estadoParaMostrar && (
                <State text={estadoParaMostrar.text} type={estadoParaMostrar.type} />
            )}
        </div>
    )
}