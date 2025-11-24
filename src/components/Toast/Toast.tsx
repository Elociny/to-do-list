import { useEffect } from "react";
import style from "./Toast.module.css"

interface ToastProps {
    message: string
    type?: "success" | "error" | "update"
    onClose: () => void
}

export function Toast({ message, type = "success", onClose }: ToastProps) {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`${style.container} ${style[type]}`}>
            <div className={style.icon}>
                {type === "success" && <i className="bi bi-check-circle-fill"></i>}
                {type === "error" && <i className="bi bi-x-circle-fill"></i>}
                {type === "update" && <i className="bi bi-pencil-square"></i>}
            </div>

            <p>{message}</p>
        </div>
    );
}
