import style from "./Empty.module.css"

import EmptyImg from "../../images/empty.svg"
import type { ReactNode } from "react";

type Type = "error" | "empty"

interface EmptyProps {
    children?: ReactNode;
    tipo: Type
}

export function Empty({ children, tipo }: EmptyProps) {
    return (
        <div className={`${style.error}`}>
            {tipo === "empty" ? <h1>Nenhuma tarefa por aqui… ainda!</h1> : <h1>Ops! Algo deu errado por aqui.</h1>}
            {tipo === "empty" ? <p>Parece que o seu dia está livre. Que tal começar criando uma nova?</p> : <p>Mas não se preocupe, você pode tentar novamente mais tarde.</p>}
            <img src={EmptyImg} alt="Nenhuma tarefa encontrada" />
            
            {children}
        </div>
    )
}
