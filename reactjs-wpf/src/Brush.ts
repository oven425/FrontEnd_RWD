import { CSSProperties } from "react";
import { Color, Colors } from "./Color";

interface IBrush {
    ToCSS(): CSSProperties;
}

export class SoildBrush implements IBrush {
    // constructor(r: number, g: number, b: number, a: number = 255) {
    //     this.r = r
    //     this.g = g
    //     this.b = b
    //     this.a = a
    //     let aa = Colors.Red;
    // }
    
    // r: number = 0;
    // g: number = 0;
    // b: number = 0;
    // a: number = 0;
    // ToCSS(): CSSProperties {
    //     return ({
    //         backgroundColor: `rgb(${this.r},${this.g},${this.b})`
    //     });
    // }
    constructor(color:Color){
        this.m_Color=color
    }
    ToCSS(): CSSProperties {
        return({
            backgroundColor: `rgb(${this.m_Color?.r},${this.m_Color?.g},${this.m_Color?.b})`
        })
    }
    m_Color:Color | undefined;
    

}

export class GradientStop{

}


export class LinearGradientBrush implements IBrush{
    ToCSS(): CSSProperties {
        throw new Error("Method not implemented.");
    }

}