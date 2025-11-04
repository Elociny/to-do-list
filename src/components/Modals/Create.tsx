import { Button } from "../Button/Button"
import { Date } from "../Inputs/Date"
import { Text } from "../Inputs/Text"
import { TextArea } from "../Inputs/TextArea"
import style from "./Modals.module.css"

interface CreateProps {
    title: string
}

export function Create({ title }: CreateProps) {
    return (
        <div className={`${style.modal}`}>
            <div className={`${style.title}`}>
                <h2>{title}</h2>
            </div>
            <div className={`${style.main}`}>
                <Text id="title" label="Título" />
                <Text id="person" label="Responsável" />
                <Date id="date" label="Prazo" state={{ text: "atrasado", type: "atrasado" }} />
                <TextArea id="description" label="Descrição" />

                <div className={`row ${style.buttons}`}>
                    <Button color="transparente" text="cancelar" />
                    <Button color="azul" text="cadastrar" />
                </div>
            </div>
        </div>
    )
}