import style from "./Button.module.css"

type Color = "azul" | "transparente"

interface ButtonProps {
    text: string
    color: Color
}

export function Button({ color, text }: ButtonProps) {
    return(
        <button className={`row ${style.button} ${style[color]}`}>
            { text }
        </button>
    )
}