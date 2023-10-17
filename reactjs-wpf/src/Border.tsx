import { CSSProperties, useEffect, useState } from "react"
export enum VerticalAlignment {
    Top,
    Center,
    Bottom,
    Stretch
}

export const VerticalAlignmentToCSS = (data:VerticalAlignment):CSSProperties=>{
    return({
        alignSelf:'center'
    })
}
interface IBrush{
    ToCSS(): CSSProperties;
}

export class SoildBrush implements  IBrush{
    constructor(r:number, g:number, b:number, a:number=255) {
        this.r = r
        this.g = g
        this.b = b
        this.a = a
      }
    r:number = 0;
    g:number = 0;
    b:number = 0;
    a:number = 0;
    ToCSS(): CSSProperties {
        return ({
            backgroundColor:`rgb(${this.r},${this.g},${this.b})`
          });
    }

}

class UIProps
{
    width:number = 0;
}

type BorderProps={
    background?:SoildBrush
    VerticalAlignment?:VerticalAlignment,
    width?:number,
    height?:number
}
export const Border=(props:BorderProps)=>{
    useEffect(()=>{
         console.log(`propschange: ${props.width}`);
         let ww = props.width;
         
         setStyle({
            ... props.background?.ToCSS(),
            width:`${props.width}px`,
            height:'50px',
         })
    },[props])
    const ver=():CSSProperties=>{
        return ({
            alignSelf:'center'
          });
    }
    const myStyle: React.CSSProperties = {

        ...props.background?.ToCSS(),
        ...ver()
    }
    const [style, setStyle] = useState<CSSProperties>();
    return(
        <div style={style}>

        </div>
    )
}