import { Button } from "../Button/Button"
import { Date } from "../Inputs/Date"
import { Text } from "../Inputs/Text"
import { TextArea } from "../Inputs/TextArea"
import style from "./Task.module.css"

interface TaskProps {
    title: string
}

export function Task({ title }: TaskProps) {
    return(
        <div className={`${style.task}`}>
            <div className={`${style.title}`}>
                <h2>{ title }</h2>
            </div>

            <div className={`${style.main}`}>
                <Text id="person" label="Responsável" />
                <Date id="date" label="Prazo" /> 
                <TextArea id="description" label="Descrição" />

                <div className={`row ${style.buttons}`}>
                    <Button text="excluir" color="transparente"/> 
                    <Button text="alterar" color="azul"/> 
                </div>
            </div>
        </div>
    )
}