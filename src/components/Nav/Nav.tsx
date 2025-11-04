import style from "./Nav.module.css"

type Color = "azul" | "azul-escuro"

interface NavProps {
    text: string
    color: Color
}

export function Nav({ text, color }: NavProps) {
    return(
        <div className={`row ${style.navegation} ${style[color]}`}>
            <p>{ text }</p>
        </div>
    )
}