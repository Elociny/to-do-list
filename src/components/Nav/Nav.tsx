import style from "./Nav.module.css"

type Color = "azul" | "azul-escuro"

interface NavProps {
    text: string
    color: Color
    onClick?: () => void
}

export function Nav({ text, color, onClick }: NavProps) {
    return(
        <div className={`row ${style.navegation} ${style[color]}`} onClick={onClick}>
            <p>{ text }</p>
        </div>
    )
}