import type { ReactNode } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

import style from "./Layout.module.css"

type LayoutProps = {
    children: ReactNode;
};



export function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />

            <main className={`padding ${style.layout}`}>
                {children}
            </main>

            <Footer />
        </>
    )
}