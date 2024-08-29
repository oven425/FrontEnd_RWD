import { CSSProperties, ReactElement, ReactNode, cloneElement, useEffect, useState } from "react"
import { SoildBrush } from "./Brush"
import { Colors } from "./Color"
import PropTypes from 'prop-types'
import React from "react"
import { BorderProps } from "./Border"
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
type ReactNodeA =
| ReactElement
| string
| number
| Iterable<ReactNode>
| boolean
| null
| undefined
type WindowProps = {
    background?: SoildBrush
    children?: ReactNode
}

//https://jaketrent.com/post/change-parent-on-child-focus-react/
//https://www.google.com/search?q=React.cloneElement&rlz=1C1ONGR_zh-TWTW1004TW1004&sourceid=chrome&ie=UTF-8
const Window = (props: WindowProps) => {
    console.log(props.children?.valueOf())
    const [style, setStyle] = useState<CSSProperties>();
    useEffect(() => {
        setStyle({
            display: 'grid',
            width: '100vw',
            height: '100vh',
            //gridColumnStart
            backgroundColor: `${props.background?.ToCSS()}`
        })
    }, [props])

    return (
        <div style={style}>
{/* {Window.Content} */}

            
        </div>
    )
}
const DialogHeader = (props:WindowProps) => <div>{props.children}</div>;
Window.Content=DialogHeader
//Window.defaultProps = defaultProps;
export default Window