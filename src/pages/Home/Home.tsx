import { Button } from "../../components/Button/Button";
import { Layout } from "../../components/Layout/Layout";
import { Nav } from "../../components/Nav/Nav";

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

        </Layout>
    )
}