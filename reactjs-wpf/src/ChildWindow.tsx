import React, { ReactElement, forwardRef, useImperativeHandle, useState } from "react"

type ChildWindowPorps = {
    title?:string
}

export interface IChildWindowRef{
    open():void;
    close():void;
}

const ChildWindow= forwardRef<IChildWindowRef, ChildWindowPorps>((props, ref)=>{
    const[isShow, setIsShow] = useState(false)
    useImperativeHandle(ref, ()=>({
        open() {
            console.log('open')
            setIsShow(x=>true);
        },
        close() {
            setIsShow(x=>false);
        },
    }));
    return(
        <div className={`${isShow===true?'block':'hidden'} bg-white fixed left-0 top-0 w-full h-full bg-opacity-50`}>
            <div>
                {props.title}
            </div>
        </div>
    )
})

export default ChildWindow

