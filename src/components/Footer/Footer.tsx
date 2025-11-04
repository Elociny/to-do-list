import style from "./Footer.module.css"

export function Footer() {
    return(
        <footer className={`padding ${style.footer}`}>
            <ul className={`row`}>
                <li>Desenvolvido por: Nicole Lins Coelho</li>
                <li>STADSCAS3NB</li>
                <li>@ 2025 Todos os direitos reservados.</li>
            </ul>
        </footer>
    )
}