import style from "./Footer.module.css"

export function Footer() {
    return(
        <footer className={`padding ${style.footer}`}>
            <ul className={`row`}>
                <li>Desenvolvido por: <a href="https://www.linkedin.com/in/nicolelinscoelho" target="_blank" rel="noopener noreferrer">Nicole Lins Coelho</a></li>
                <li>STADSCAS3NB</li>
                <li>@ 2025 Todos os direitos reservados.</li>
            </ul>
        </footer>
    )
}