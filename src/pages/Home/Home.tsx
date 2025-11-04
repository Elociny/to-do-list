import { Button } from "../../components/Button/Button";
import { Date } from "../../components/Inputs/Date";
import { Text } from "../../components/Inputs/Text";
import { TextArea } from "../../components/Inputs/TextArea";
import { Layout } from "../../components/Layout/Layout";
import { Create } from "../../components/Modals/Create";
import { Delete } from "../../components/Modals/Delete";
import { Nav } from "../../components/Nav/Nav";
import { Task } from "../../components/Task/Task";

import style from "./Home.module.css"

export function Home() {
    return (
        <Layout>
            <div className={`row ${style.title}`}>
                <h2>Suas tarefas</h2>

                <div className="">
                    <Button text="cadastra tarefa" color="azul" />
                </div>
            </div>

            <div className={`row ${style.nav}`}>
                <Nav text="para fazer" color="azul-escuro" />
                <Nav text="atrazadas" color="azul" />
            </div>

            <div className="inputs">
                <Text id="text" label="Título" />
                <TextArea id="description" label="Descrição" />
                <Date id="date" label="Prazo" />
            </div>

            <div className="modal">
                <Create title="Cadastrar tarefa" />
                <Task title="Título da tarefa" />
                <Delete>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, consequatur. Veritatis odit atque itaque, consectetur laborum, quae corrupti cum suscipit exercitationem quos voluptate eveniet facere earum necessitatibus quibusdam doloribus quo.</p>
                </Delete>
            </div>
        </Layout>
    )
}