export class Color {
    r: number = 0;
    g: number = 0;
    b: number = 0;
    a: number = 0;
    static FromUInt32(argb: number): Color {
        let c1 = new Color();
        
        c1.a = ((argb & 0xff000000) >>> 24);
        c1.r = ((argb & 0x00ff0000) >> 16);
        c1.g = ((argb & 0x0000ff00) >> 8);
        c1.b = (argb & 0x000000ff);
        return c1;
    }
}

export class Colors {
    static Red: Color = Color.FromUInt32(4294901760);
}
