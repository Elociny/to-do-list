import type { ReactNode } from "react";
import style from "./Modals.module.css"
import { Button } from "../Button/Button";

type DeleteProps = {
    children: ReactNode;
    onClose?: () => void
};

export function Delete({ children, onClose }: DeleteProps) {
    return (
        <div className={`${style.background}`} onClick={onClose}>
            <div className={`${style.modal}`} onClick={(e) => e.stopPropagation()}>
                <div className={`${style.title}`}>
                    <h2>Excluir tarefa</h2>
                </div>

                <div className={`${style.main}`}>
                    {children}

                    <div className={`row ${style.buttons}`}>
                        <Button color="transparente" text="cancelar" onClick={onClose} />
                        <Button color="azul" text="excluir" />
                    </div>
                </div>
            </div>
        </div>
    )
}