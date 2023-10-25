import { CSSProperties, useEffect, useState } from "react"
import { SoildBrush } from "./Brush"
import { Colors } from "./Color"
export enum VerticalAlignment {
    Top,
    Center,
    Bottom,
    Stretch
}

export enum HorizontalAlignment  {
    Left,
    Center,
    Right,
    Stretch
}

export const VerticalAlignmentToCSS = (data: VerticalAlignment | undefined): CSSProperties => {
    let str = 'stretch';
    if (data === undefined) {

    }
    switch (data) {
        case VerticalAlignment.Center: {
            str = 'center'
        }
            break;
        case VerticalAlignment.Top: {
            str = 'start'
        }
            break;
        case VerticalAlignment.Bottom: {
            str = 'end'
        }
            break;
    }
    return ({
        alignSelf: str
    })
}


export class Thickness {
    constructor(left: number, top: number, right: number, bottom: number = 0) {
        this.left = left
        this.top = top
        this.right = right
        this.bottom = bottom
    }
    left: number = 0;
    top: number = 0;
    right: number = 0;
    bottom: number = 0;
    ToCss(): string {
        return `${this.top}px ${this.right}px ${this.bottom}px ${this.left}px`
    }
}

export class Grid{
    Row:number = 0
    Column:number = 0;
    RowSpan:number=1;
    ColumnSpan:number = 1;
}

type BorderProps = {
    borderbrush?: SoildBrush
    background?: SoildBrush
    borderthickness?: Thickness
    verticalAlignment?: VerticalAlignment
    width?: number
    height?: number
    cornerRadius?: Thickness
    margin?:Thickness
}

export const Border = (props: BorderProps) => {
    console.log(props)
    useEffect(() => {
        setStyle({
            ...props.background?.ToCSS(),
            ...VerticalAlignmentToCSS(props.verticalAlignment),

            width: `${props.width}px`,
            height: `${props.height}px`,
            gridColumnStart:'1',
            gridRowStart:'1',
            margin:'2',
            // border:'3px',
            // borderStyle:'solid',
            // borderColor:'red yellow green blue',
            // borderWidth:`${props.borderthickness?.ToCss()}`,
            // borderRadius:`${props.cornerRadius?.ToCss()}`,
            opacity: '1'
        })
    }, [props])
    const ver = (): CSSProperties => {
        return ({
            alignSelf: 'center'
        });
    }


    const [style, setStyle] = useState<CSSProperties>();
    return (
        <div style={style}>

        </div>
    )
}

export { SoildBrush }
