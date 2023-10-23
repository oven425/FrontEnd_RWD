import { CSSProperties, useEffect, useState } from "react"
import { SoildBrush } from "./Brush"
import { Colors } from "./Color"
export enum VerticalAlignment {
    Top,
    Center,
    Bottom,
    Stretch
}

export const VerticalAlignmentToCSS = (data: VerticalAlignment): CSSProperties => {
    return ({
        alignSelf: 'center'
    })
}


export class Thickness{
    constructor(left: number, top: number, right: number, bottom: number = 0) {
        this.left = left
        this.top = top
        this.right = right
        this.bottom = bottom
    }
    left:number = 0;
    top:number = 0;
    right:number = 0;
    bottom:number = 0;
    ToCss():string{
        return `${this.top}px ${this.right}px ${this.bottom}px ${this.left}px`
    }
}

type BorderProps = {
    borderbrush?:SoildBrush
    background?: SoildBrush
    borderthickness?:Thickness
    verticalAlignment?: VerticalAlignment,
    width?: number,
    height?: number,
    cornerRadius?:Thickness
}
export const Border = (props: BorderProps) => {
    let red = Colors.Red;
    
    console.log(red);
    let argb:number = 0xff000000;
     
    console.log((argb>>>24));
    console.log(props)
    useEffect(() => {
        console.log(`propschange: ${props.width}`);
        setStyle({
            ...props.background?.ToCSS(),
            width: `${props.width}px`,
            height: '50px',
            border:'3px',
            borderStyle:'solid',
            borderColor:'red yellow green blue',
            borderWidth:`${props.borderthickness?.ToCss()}`,
            borderRadius:`${props.cornerRadius?.ToCss()}`
        })
    }, [props])
    const ver = (): CSSProperties => {
        return ({
            alignSelf: 'center'
        });
    }
    // const myStyle: React.CSSProperties = {

    //     ...props.background?.ToCSS(),
    //     ...ver()
    // }
    const [style, setStyle] = useState<CSSProperties>();
    return (
        <div style={style}>

        </div>
    )
}

export { SoildBrush }
