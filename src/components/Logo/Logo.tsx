import style from "./Logo.module.css"

import logoIcon from "../../assets/images/icon.svg"
import { NavLink } from "react-router"

export function Logo() {
    return (
        <NavLink to="/" className={`row ${style.logo}`}>
            <img src={logoIcon} alt="Logo do gerenciador de tarefas" />
            <h1>Gerenciador de tarefas</h1>
        </NavLink>
    )
}