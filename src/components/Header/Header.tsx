import { Logo } from "../Logo/Logo"
import style from "./Header.module.css"

export function Header() {
    return (
        <header className={`padding ${style.header}`}>
            <ul className={`row`}>
                <li>
                    <Logo />
                </li>
                <li>
                    <a href="https://github.com/Elociny" target="_blank">
                        <i className="bi bi-github"></i>
                    </a>
                </li>
            </ul>
        </header>
    )
} 