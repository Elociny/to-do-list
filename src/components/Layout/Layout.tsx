import type { ReactNode } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

import style from "./Layout.module.css"

type LayoutProps = {
    children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
    return (
        <div className={`${style.container}`}>
            <Header />

            <main className={`padding row ${style.layout}`}>
                {children}
            </main>

            <Footer />
        </div>
    )
}