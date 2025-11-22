import type { ReactNode } from "react";
import style from "./Modals.module.css"

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
                </div>
            </div>
        </div>
    )
}