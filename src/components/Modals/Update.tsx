 import style from "./Modals.module.css"

 interface UpdateProps {
    onClose?: () => void
 }

 export function Update ({ onClose }: UpdateProps) {
    return(
        <div className={`${style.background}`} onClick={onClose}>
            <div className={`${style.modal}`} onClick={(e) => e.stopPropagation()}>
                
            </div>
        </div>
    )
 }