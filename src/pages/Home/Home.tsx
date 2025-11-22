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

    const { tarefas, isLoading } = useTarefas()

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
                <Nav text="para fazer" color="azul-escuro" />
                <Nav text="atrasadas" color="azul" />
            </div>

            <div className={`${style.grid}`}>
                { isLoading && <p>Carregando tarefas...</p> }

                {tarefas?.map((item) => (
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