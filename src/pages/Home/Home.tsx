import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { Layout } from "../../components/Layout/Layout";
import { TaskModal } from "../../components/Modals/TaskModal";
import { Nav } from "../../components/Nav/Nav";
import { Task } from "../../components/Task/Task";

import style from "./Home.module.css"
import { useTarefas } from "../../hooks/useTarefas";

export function Home() {
    const [showModal, setShowModal] = useState(false)

    const [filtroAtivo, setFiltroAtivo] = useState<"pendentes" | "atrasadas">("pendentes")

    const { tarefas, isLoading } = useTarefas()

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

            <div className={`${style.grid}`}>
                {isLoading && <p>Carregando tarefas...</p>}

                {tarefasFiltradas?.map((item) => (
                    <Task
                        key={item.id}
                        dados={item}
                    />
                ))}
            </div>

            {showModal && (
                <TaskModal
                    onClose={() => setShowModal(false)}
                />
            )}

        </Layout>
    )
}