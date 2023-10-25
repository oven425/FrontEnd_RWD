import { type } from "os";
import { CSSProperties, useEffect, useState } from "react";
import { SoildBrush } from "./Brush";

type CanvasProps={
    width?:number,
    height?:number,
    background:SoildBrush
}
const Canvas = (props:CanvasProps)=>{
    const [style, setStyle] = useState<CSSProperties>();
    useEffect(()=>{
        setStyle({
            width:`${props.width}px`,
            height:`${props.height}px`

        });
    },[props])
    return(
        <div style={style}>

        </div>
    )
}

export default Canvas;