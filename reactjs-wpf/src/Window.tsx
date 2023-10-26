import { CSSProperties, ReactElement, ReactNode, useEffect, useState } from "react"
import { SoildBrush } from "./Brush"
import { Colors } from "./Color"

// type WindowProps={
//     title?:string,
//     children:ReactNode|string
// }

class WindowProps{
    constructor(){
        console.log('WindowProps constructor')
        this.background = new SoildBrush(Colors.Orange)
    }
    background?:SoildBrush
    children:ReactNode|string
}
export const Window=(props:WindowProps=new WindowProps())=>{
    const [style, setStyle] = useState<CSSProperties>();
    useEffect(()=>{
        console.log('Window useEffect')
        setStyle({
            display:'grid',
            width:'100vw',
            height:'100vh',
            backgroundColor:`${props.background?.ToCSS()}`
        })
    },[])
    return(
        <div style={style}>
            {props.children}
        </div>
    )
}