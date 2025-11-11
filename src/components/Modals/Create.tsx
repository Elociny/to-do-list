import { Button } from "../Button/Button"
import { Date } from "../Inputs/Date"
import { Text } from "../Inputs/Text"
import { TextArea } from "../Inputs/TextArea"
import style from "./Modals.module.css"

interface CreateProps {
    title: string
    onClose: () => void
}

export function Create({ title, onClose }: CreateProps) {
    return (
        <div className={`${style.background}`} onClick={onClose}>
            <div className={`${style.modal}`} onClick={(e) => e.stopPropagation()}>
                <div className={`${style.title}`}>
                    <h2>{title}</h2>
                </div>
                <div className={`${style.main}`}>
                    <Text id="title" label="Título" />
                    <Text id="person" label="Responsável" />
                    <Date id="date" label="Prazo" />
                    <TextArea id="description" label="Descrição" />

                    <div className={`row ${style.buttons}`}>
                        <Button color="transparente" text="cancelar" onClick={onClose} />
                        <Button color="azul" text="cadastrar" />
                    </div>
                </div>
            </div>
        </div>
    )
}