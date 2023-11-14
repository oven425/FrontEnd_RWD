import { ReactNode } from "react";

type ContentControlProps={
    chidlren?: ReactNode
}



const ContentControl=(props:ContentControlProps)=>{
    return(
        <div style={{display:'grid'}}>
            <div>
                {props.chidlren}
            </div>
        </div>
    )
}

export default ContentControl