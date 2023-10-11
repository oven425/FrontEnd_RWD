export enum VerticalAlignment {
    Top,
    Center,
    Bottom,
    Stretch
}
type TextBlockProps={
    text?:string,
    VerticalAlignment? :VerticalAlignment 
}
export const TextBlock=(props:TextBlockProps)=>{
    return(
        <p className=" self-center justify-self-center">
            {props.text}
        </p>
    )
}