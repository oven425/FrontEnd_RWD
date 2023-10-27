import { CSSProperties, ReactElement, ReactNode, useEffect, useState } from "react"
import { SoildBrush } from "./Brush"
import { Colors } from "./Color"
import PropTypes from 'prop-types'
// type WindowProps={
//     title?:string,
//     children:ReactNode|string
// }

// type GreetProps = { age: number } & typeof defaultProps;

// const defaultProps = {
//   age:21
// };

// type WindowProps={
//     background?:SoildBrush
//     children:ReactNode|string
// }& typeof defaultProps;
// const defaultProps={
//     background:new SoildBrush(Colors.Red)
// }

type WindowProps={
    background?:SoildBrush
    children:ReactNode|string
}


const Window=(props:WindowProps)=>{

    const [style, setStyle] = useState<CSSProperties>();
    useEffect(()=>{
        
        setStyle({
            display:'grid',
            width:'100vw',
            height:'100vh',
            backgroundColor:`${props.background?.ToCSS()}`
        })
    },[props])
    return(
        <div style={style}>
            {
                props.children
            }
        </div>
    )
}
//Window.defaultProps = defaultProps;
export default Window