import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { Layout } from "../../components/Layout/Layout";
import { Create } from "../../components/Modals/Create";
import { Nav } from "../../components/Nav/Nav";
import { Task } from "../../components/Task/Task";

import style from "./Home.module.css"

export function Home() {
    const [showModal, setShowModal] = useState(false)

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
                <Task title="titulo" />
                <Task title="titulo" />
                <Task title="titulo" />
                <Task title="titulo" />
                <Task title="titulo" />
                <Task title="titulo" />
            </div>

            {showModal && (
                <Create
                    title="criar tarefa"
                    onClose={() => setShowModal(false)}
                />

            )}

        </Layout>
    )
}