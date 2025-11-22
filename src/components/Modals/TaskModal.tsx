import { useState } from "react";
import { useTarefas } from "../../hooks/useTarefas";
import type { ITarefa } from "../../types/ITarefa";
import { Button } from "../Button/Button";
import { Text } from "../Inputs/Text";
import { TextArea } from "../Inputs/TextArea";
import { DateInput } from "../Inputs/DateInput";
import style from "./Modals.module.css";

interface TaskModalProps {
    onClose: () => void;
    taskToEdit?: ITarefa;
}

export function TaskModal({ onClose, taskToEdit }: TaskModalProps) {
    const { criarTarefa, alterarTarefa } = useTarefas();

    const isEditMode = !!taskToEdit;

    const [titulo, setTitulo] = useState(taskToEdit?.titulo || "");
    const [responsavel, setResponsavel] = useState(taskToEdit?.responsavel || "");
    const [dataTermino, setDataTermino] = useState(taskToEdit?.dataTermino || "");
    const [descricao, setDescricao] = useState(taskToEdit?.descricao || "");

    const handleSubmit = () => {
        const dadosFormulario: ITarefa = {
            id: taskToEdit?.id,
            titulo,
            responsavel,
            dataTermino,
            descricao
        };

        if (isEditMode) {
            alterarTarefa(dadosFormulario, {
                onSuccess: () => onClose()
            });
        } else {
            criarTarefa(dadosFormulario, {
                onSuccess: () => onClose()
            });
        }
    };

    return (
        <div className={`${style.background}`}>
            <div className={`${style.modal}`} onClick={(e) => e.stopPropagation()}>
                <h2 className={`${style.title}`}>
                    {isEditMode ? "Editar Tarefa" : "Nova Tarefa"}
                </h2>

                <div className={`${style.main}`}>
                    <Text
                        id="titulo" label="Título" placeholder="Titulo..."
                        value={titulo} onChange={(e) => setTitulo(e.target.value)}
                    />
                    <Text
                        id="resp" label="Responsável" placeholder="Responsável..."
                        value={responsavel} onChange={(e) => setResponsavel(e.target.value)}
                    />
                    <DateInput
                        id="data" label="Prazo"
                        value={dataTermino} onChange={(e) => setDataTermino(e.target.value)}
                    />
                    <TextArea
                        id="desc" label="Descrição"
                        value={descricao} onChange={(e) => setDescricao(e.target.value)}
                    />

                    <div className={`row ${style.buttons}`}>
                        <Button color="transparente" text="cancelar" onClick={onClose} />
                        <Button
                            color="azul"
                            text={isEditMode ? "editar" : "cadastrar"}
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}