import style from "./Button.module.css"

type Color = "azul" | "transparente"

interface ButtonProps {
    text: string
    color: Color
    onClick?: () => void
}

export function Button({ color, text, onClick }: ButtonProps) {
    return (
        <button
            className={`row ${style.button} ${style[color]}`}
            onClick={ onClick }
        >
            {text}
        </button>
    )
}