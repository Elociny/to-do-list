import { useState } from "react"
import { Button } from "../Button/Button"
import { Text } from "../Inputs/Text"
import { TextArea } from "../Inputs/TextArea"

import style from "./Task.module.css"
import { Delete } from "../Modals/Delete"
import { useTarefas } from "../../hooks/useTarefas"
import type { ITarefa } from "../../types/ITarefa"
import { DateInput } from "../Inputs/DateInput"
import { TaskModal } from "../Modals/TaskModal"

interface TaskProps {
    dados: ITarefa
    onSuccessMessage?: (msg: string) => void
    onClose?: () => void
}

export function Task({ dados, onClose, onSuccessMessage }: TaskProps) {
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showUpdateModal, setshowUpdateModal] = useState(false)

    const { excluirTarefa } = useTarefas()

    const handleDelete = () => {
        if (dados.id) {
            excluirTarefa(dados.id, {
                onSuccess: () => {
                    setShowDeleteModal(false)

                    if (onSuccessMessage) {
                        onSuccessMessage("Tarefa excluida com sucesso!")
                    }
                }
            })
        }
    }

    return (
        <div className={`${style.background}`} onClick={onClose}>
            <div className={`${style.task}`} onClick={(e) => e.stopPropagation()}>
                <div className={`${style.title}`}>
                    <h2>{dados.titulo}</h2>
                </div>

                <div className={`${style.main}`}>
                    <Text
                        id={`resp-${dados.id}`}
                        label="Responsável"
                        placeholder=""
                        value={dados.responsavel}
                        readOnly
                    />
                    <DateInput
                        id={`date-${dados.id}`}
                        label="Prazo"
                        value={dados.dataTermino}
                        readOnly
                    />
                    <TextArea
                        id={`desc-${dados.id}`}
                        label="Descrição"
                        value={dados.descricao}
                        readOnly
                    />

                    <div className={`row ${style.buttons}`}>
                        <Button text="excluir" color="transparente" onClick={() => setShowDeleteModal(true)} />
                        <Button text="alterar" color="azul" onClick={() => setshowUpdateModal(true)} />
                    </div>
                </div>
            </div>

            {showUpdateModal && (
                <TaskModal
                    onClose={() => setshowUpdateModal(false)}
                    taskToEdit={dados}
                    onSuccess={() => onSuccessMessage?.("Tarefa alterada com sucesso")}
                />
            )}

            {showDeleteModal && (
                <Delete onClose={() => setShowDeleteModal(false)}>
                    <p>Tem certeza que deseja excluir a tarefa <strong>{dados.titulo}</strong>?</p>

                    <div className={`row ${style.buttons}`}>
                        <Button
                            color="transparente"
                            text="cancelar"
                            onClick={() => setShowDeleteModal(false)}
                        />
                        <Button
                            color="azul"
                            text="excluir"
                            onClick={handleDelete}
                        />
                    </div>
                </Delete>
            )}
        </div>
    )
}