import { CSSProperties, ReactElement, ReactNode, useEffect, useState } from "react"
import { SoildBrush } from "./Brush"
import { Colors } from "./Color"
import PropTypes from 'prop-types'
import React from "react"
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

type WindowProps = {
    background?: SoildBrush
    children: ReactNode
    cc?: ReactElement
}

//https://jaketrent.com/post/change-parent-on-child-focus-react/
//https://www.google.com/search?q=React.cloneElement&rlz=1C1ONGR_zh-TWTW1004TW1004&sourceid=chrome&ie=UTF-8
const Window = (props: WindowProps) => {

    const [style, setStyle] = useState<CSSProperties>();
    useEffect(() => {
        setStyle({
            display: 'grid',
            width: '100vw',
            height: '100vh',
            backgroundColor: `${props.background?.ToCSS()}`
        })

    }, [props])

    const renderContent = React.cloneElement(React.Children.only(props.children) as React.ReactElement<WindowProps>, {

    })
    // const renderContent = React.cloneElement(props.children, {
    //     style: {

    //     }
    //   })
    return (
        <div style={style}>
            {
                renderContent
                //React.Children.only(props.children)
            }
        </div>
    )
}
//Window.defaultProps = defaultProps;
export default Window