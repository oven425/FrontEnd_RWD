import { CSSProperties } from "react"
export enum VerticalAlignment {
    Top,
    Center,
    Bottom,
    Stretch
}
interface IBrush{
    ToCSS(): CSSProperties;
}

export class SoildBrush implements  IBrush{
    SoildBrush(r:number){

    }
    
    ToCSS(): CSSProperties {
        return ({
            width:"50px",
            height:"50px",
            backgroundColor:'rgb(255,255,0)'
          });
    }

}

type BorderProps={
    background?:SoildBrush
    VerticalAlignment?:VerticalAlignment,
    width?:number,
    height?:number
}
export const Border=(props:BorderProps)=>{
    
    const ver=():CSSProperties=>{
        return ({
            alignSelf:'center'
          });
    }
    const myStyle: React.CSSProperties = {

        ...props.background?.ToCSS(),
        ...ver()
    }
    return(
        <div style={{...props.background?.ToCSS(),...ver()}}>

        </div>
    )
}