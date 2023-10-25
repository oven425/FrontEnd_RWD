import { CSSProperties, ReactElement, ReactNode, useEffect, useState } from "react"

type WindowProps={
    title?:string,
    children:ReactNode|string
}
export const Window=(props:WindowProps)=>{
    const [style, setStyle] = useState<CSSProperties>();
    useEffect(()=>{
        setStyle({
            display:'grid',
            width:'100vw',
            height:'100vh',
            backgroundColor:'red'
        })
    },[])
    return(
        <div style={style}>
            {props.children}
        </div>
    )
}