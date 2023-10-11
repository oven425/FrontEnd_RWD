import { ReactElement, ReactNode } from "react"

type WindowProps={
    title?:string,
    children:ReactNode|string
}
export const Window=(props:WindowProps)=>{
    return(
        <div className=" bg-red-400 flex h-screen w-screen">
            {props.children}
        </div>
    )
}