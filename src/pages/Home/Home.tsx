import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { Layout } from "../../components/Layout/Layout";
import { TaskModal } from "../../components/Modals/TaskModal";
import { Nav } from "../../components/Nav/Nav";
import { Task } from "../../components/Task/Task";

import style from "./Home.module.css"
import { useTarefas } from "../../hooks/useTarefas";
import { Spinner } from "../../components/Spinner/Spinner";
import { Empty } from "../../components/Empty/Empty";
import { Toast } from "../../components/Toast/Toast";

export function Home() {
    const [showModal, setShowModal] = useState(false)

    const [filtroAtivo, setFiltroAtivo] = useState<"pendentes" | "atrasadas">("pendentes")

    const { tarefas, isLoading, isError } = useTarefas()

    const [toast, setToast] = useState({
        visible: false,
        message: '',
        type: 'success' as 'success' | 'error' | "update"
    });

    const showToast = (message: string, type: 'success' | 'error' | 'update' = 'success') => {
        setToast({ visible: true, message, type });
    };

    const hideToast = () => {
        setToast((prev) => ({ ...prev, visible: false }));
    };

    const getHojeFormatado = () => {
        const hoje = new Date

        const ano = hoje.getFullYear()
        const mes = String(hoje.getMonth() + 1).padStart(2, '0')
        const dia = String(hoje.getDate()).padStart(2, '0')

        return `${ano}-${mes}-${dia}`
    }

    const tarefasFiltradas = tarefas?.filter(tarefa => {
        const hoje = getHojeFormatado()

        const isAtrasada = tarefa.dataTermino < hoje

        if (filtroAtivo === "atrasadas") {
            return isAtrasada
        } else {
            return !isAtrasada
        }
    })

    return (
        <Layout>
            <div className={`row ${style.title}`}>
                <h2>Suas tarefas</h2>

                <div className="">
                    <Button
                        text="cadastra tarefa"
                        color="azul"
                        onClick={() => setShowModal(true)}
                    />
                </div>
            </div>

            <div className={`row ${style.nav}`}>
                <Nav
                    text="para fazer"
                    color={filtroAtivo === 'pendentes' ? "azul-escuro" : "azul"}
                    onClick={() => setFiltroAtivo('pendentes')}
                />

                <Nav
                    text="atrasadas"
                    color={filtroAtivo === 'atrasadas' ? "azul-escuro" : "azul"}
                    onClick={() => setFiltroAtivo('atrasadas')}
                />
            </div>

            {isLoading && <Spinner />}

            {!isLoading && isError && (
                <Empty tipo="error" />
            )}

            {!isLoading && !isError && tarefasFiltradas?.length === 0 && (
                <Empty tipo="empty">
                    <Button
                        color="azul"
                        text="criar nova tarefa"
                        onClick={() => setShowModal(true)}
                    />
                </Empty>
            )}

            <div className={`${style.grid}`}>
                {!isLoading && !isError && tarefasFiltradas?.map((item) => (
                    <Task
                        key={item.id}
                        dados={item}
                        onSuccessMessage={(msg) => {
                            if (msg.includes("excluída") || msg.includes("excluida")) {
                                showToast(msg, "error")
                            } else if (msg.includes("alterada")) {
                                showToast(msg, "update");
                            } else {
                                showToast(msg, "success");
                            }
                        }}
                    />
                ))}
            </div>

            {toast.visible && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={hideToast}
                />
            )}

            {showModal && (
                <TaskModal
                    onClose={() => setShowModal(false)}
                    onSuccess={() => showToast("Tarefa salva com sucesso!", "success")}
                />
            )}

        </Layout>
    )
}