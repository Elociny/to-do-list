import { Logo } from "../Logo/Logo"
import style from "./Header.module.css"

export function Header() {
    return (
        <header className={`row padding ${style.header}`}>
            <Logo />

            <ul className={`row ${style.redes}`}>
                <li>
                    <a href="https://github.com/Elociny" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github"></i>
                    </a>
                </li>
                
                <li>
                    <a href="https://www.linkedin.com/in/nicolelinscoelho" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </li>
            </ul>
        </header>
    )
} 