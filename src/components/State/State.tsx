import style from "./State.module.css"

type State = "atrasado" | "concluido"

interface StateProps {
    text: State
    type: State
}

export function State({ text, type }: StateProps) {
    return(
        <div className={`${style.state} ${style[type]}`}>
            { text }
        </div>
    )
}