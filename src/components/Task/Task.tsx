import { useState } from "react"
import { Button } from "../Button/Button"
import { Date } from "../Inputs/Date"
import { Text } from "../Inputs/Text"
import { TextArea } from "../Inputs/TextArea"
import { Update } from "../Modals/Update"

import style from "./Task.module.css"
import { Delete } from "../Modals/Delete"

interface TaskProps {
    title: string
    onClose?: () => void
}

export function Task({ title, onClose }: TaskProps) {
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showUpdateModal, setshowUpdateModal] = useState(false)

    return (
        <div className={`${style.background}`} onClick={onClose}>
            <div className={`${style.task}`} onClick={(e) => e.stopPropagation()}>
                <div className={`${style.title}`}>
                    <h2>{title}</h2>
                </div>

                <div className={`${style.main}`}>
                    <Text id="person" label="Responsável" />
                    <Date id="date" label="Prazo" />
                    <TextArea id="description" label="Descrição" />

                    <div className={`row ${style.buttons}`}>
                        <Button text="excluir" color="transparente" onClick={() => setShowDeleteModal(true)} />
                        <Button text="alterar" color="azul" onClick={() => setshowUpdateModal(true)} />
                    </div>
                </div>
            </div>

            {showUpdateModal && (
                <Update onClose={() => setshowUpdateModal(false)} />
            )}

            {showDeleteModal && (
                <Delete onClose={() => setShowDeleteModal(false)}>
                    <p>A tarefa Título da tarefa será excluida permanentemente. Tem certeza que deseja exclui-lá?</p>
                </Delete>
            )}
        </div>
    )
}