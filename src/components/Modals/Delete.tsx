 import type { ReactNode } from "react";
import style from "./Modals.module.css"
import { Button } from "../Button/Button";

 type DeleteProps = {
     children: ReactNode;
 };

 export function Delete({ children }: DeleteProps) {
    return(
        <div className={`${style.modal}`}>
            <div className={`${style.title}`}>
                <h2>Excluir tarefa</h2>
            </div>

            <div className={`${style.main}`}>
                { children }

                <div className={`row ${style.buttons}`}>
                    <Button color="transparente" text="cancelar" /> 
                    <Button color="azul" text="excluir" /> 
                </div>
            </div>
        </div>
    )
 }