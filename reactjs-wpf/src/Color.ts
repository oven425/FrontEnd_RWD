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

    static FromRgb(r: number, g: number, b: number) {
        let c1 = new Color();

        c1.a = 255;
        c1.r = r;
        c1.g = g;
        c1.b = b;
        return c1;
    }
}

export class Colors {
    public static AliceBlue: Color = Color.FromUInt32(4293982463);
    public static AntiqueWhite: Color = Color.FromUInt32(4294634455);
    public static Aqua: Color = Color.FromUInt32(4278255615);
    public static Aquamarine: Color = Color.FromUInt32(4286578644);
    public static Azure: Color = Color.FromUInt32(4293984255);
    public static Beige: Color = Color.FromUInt32(4294309340);
    public static Bisque: Color = Color.FromUInt32(4294960324);
    public static Black: Color = Color.FromUInt32(4278190080);
    public static BlanchedAlmond: Color = Color.FromUInt32(4294962125);
    public static Blue: Color = Color.FromUInt32(4278190335);
    public static BlueViolet: Color = Color.FromUInt32(4287245282);
    public static Brown: Color = Color.FromUInt32(4289014314);
    public static BurlyWood: Color = Color.FromUInt32(4292786311);
    public static CadetBlue: Color = Color.FromUInt32(4284456608);
    public static Chartreuse: Color = Color.FromUInt32(4286578432);
    public static Chocolate: Color = Color.FromUInt32(4291979550);
    public static Coral: Color = Color.FromUInt32(4294934352);
    public static CornflowerBlue: Color = Color.FromUInt32(4284782061);
    public static Cornsilk: Color = Color.FromUInt32(4294965468);
    public static Crimson: Color = Color.FromUInt32(4292613180);
    public static Cyan: Color = Color.FromUInt32(4278255615);

    public static DarkBlue: Color = Color.FromUInt32(4278190219);

    public static DarkCyan: Color = Color.FromUInt32(4278225803);

    public static DarkGoldenrod: Color = Color.FromUInt32(4290283019);

    public static DarkGray: Color = Color.FromUInt32(4289309097);

    public static DarkGreen: Color = Color.FromUInt32(4278215680);

    public static DarkKhaki: Color = Color.FromUInt32(4290623339);

    public static DarkMagenta: Color = Color.FromUInt32(4287299723);
    public static DarkOliveGreen: Color = Color.FromUInt32(4283788079);
    public static DarkOrange: Color = Color.FromUInt32(4294937600);
    public static DarkOrchid: Color = Color.FromUInt32(4288230092);
    public static DarkRed: Color = Color.FromUInt32(4287299584);
    public static DarkSalmon: Color = Color.FromUInt32(4293498490);
    public static DarkSeaGreen: Color = Color.FromUInt32(4287609999);
    public static DarkSlateBlue: Color = Color.FromUInt32(4282924427);
    public static DarkSlateGray: Color = Color.FromUInt32(4281290575);
    public static DarkTurquoise: Color = Color.FromUInt32(4278243025);
    public static DarkViolet: Color = Color.FromUInt32(4287889619);
    public static DeepPink: Color = Color.FromUInt32(4294907027);
    public static DeepSkyBlue: Color = Color.FromUInt32(4278239231);

    public static DimGray: Color = Color.FromUInt32(4285098345);

    public static DodgerBlue: Color = Color.FromUInt32(4280193279);

    public static Firebrick: Color = Color.FromUInt32(4289864226);

    public static FloralWhite: Color = Color.FromUInt32(4294966000);

    public static ForestGreen: Color = Color.FromUInt32(4280453922);

    public static Fuchsia: Color = Color.FromUInt32(4294902015);

    public static Gainsboro: Color = Color.FromUInt32(4292664540);

    public static GhostWhite: Color = Color.FromUInt32(4294506751);

    public static Gold: Color = Color.FromUInt32(4294956800);

    public static Goldenrod: Color = Color.FromUInt32(4292519200);

    public static Gray: Color = Color.FromUInt32(4286611584);

    public static Green: Color = Color.FromUInt32(4278222848);

    public static GreenYellow: Color = Color.FromUInt32(4289593135);

    public static Honeydew: Color = Color.FromUInt32(4293984240);

    public static HotPink: Color = Color.FromUInt32(4294928820);

    public static IndianRed: Color = Color.FromUInt32(4291648604);

    public static Indigo: Color = Color.FromUInt32(4283105410);

    public static Ivory: Color = Color.FromUInt32(4294967280);

    public static Khaki: Color = Color.FromUInt32(4293977740);

    public static Lavender: Color = Color.FromUInt32(4293322490);

    public static LavenderBlush: Color = Color.FromUInt32(4294963445);

    public static LawnGreen: Color = Color.FromUInt32(4286381056);

    public static LemonChiffon: Color = Color.FromUInt32(4294965965);

    public static LightBlue: Color = Color.FromUInt32(4289583334);

    public static LightCoral: Color = Color.FromUInt32(4293951616);

    public static LightCyan: Color = Color.FromUInt32(4292935679);

    public static LightGoldenrodYellow: Color = Color.FromUInt32(4294638290);

    public static LightGray: Color = Color.FromUInt32(4292072403);

    public static LightGreen: Color = Color.FromUInt32(4287688336);

    public static LightPink: Color = Color.FromUInt32(4294948545);

    public static LightSalmon: Color = Color.FromUInt32(4294942842);

    public static LightSeaGreen: Color = Color.FromUInt32(4280332970);

    public static LightSkyBlue: Color = Color.FromUInt32(4287090426);

    public static LightSlateGray: Color = Color.FromUInt32(4286023833);

    public static LightSteelBlue: Color = Color.FromUInt32(4289774814);

    public static LightYellow: Color = Color.FromUInt32(4294967264);

    public static Lime: Color = Color.FromUInt32(4278255360);

    public static LimeGreen: Color = Color.FromUInt32(4281519410);

    public static Linen: Color = Color.FromUInt32(4294635750);

    public static Magenta: Color = Color.FromUInt32(4294902015);

    public static Maroon: Color = Color.FromUInt32(4286578688);

    public static MediumAquamarine: Color = Color.FromUInt32(4284927402);

    public static MediumBlue: Color = Color.FromUInt32(4278190285);

    public static MediumOrchid: Color = Color.FromUInt32(4290401747);

    public static MediumPurple: Color = Color.FromUInt32(4287852763);

    public static MediumSeaGreen: Color = Color.FromUInt32(4282168177);
    public static MediumSlateBlue: Color = Color.FromUInt32(4286277870);
    public static MediumSpringGreen: Color = Color.FromUInt32(4278254234);
    public static MediumTurquoise: Color = Color.FromUInt32(4282962380);
    public static MediumVioletRed: Color = Color.FromUInt32(4291237253);
    public static MidnightBlue: Color = Color.FromUInt32(4279834992);
    public static MintCream: Color = Color.FromUInt32(4294311930);
    public static MistyRose: Color = Color.FromUInt32(4294960353);
    public static Moccasin: Color = Color.FromUInt32(4294960309);
    public static NavajoWhite: Color = Color.FromUInt32(4294958765);
    public static Navy: Color = Color.FromUInt32(4278190208);
    public static OldLace: Color = Color.FromUInt32(4294833638);
    public static Olive: Color = Color.FromUInt32(4286611456);
    public static OliveDrab: Color = Color.FromUInt32(4285238819);
    public static Orange: Color = Color.FromUInt32(4294944000);
    public static OrangeRed: Color = Color.FromUInt32(4294919424);
    public static Orchid: Color = Color.FromUInt32(4292505814);
    public static PaleGoldenrod: Color = Color.FromUInt32(4293847210);
    public static PaleGreen: Color = Color.FromUInt32(4288215960);
    public static PaleTurquoise: Color = Color.FromUInt32(4289720046);
    public static PaleVioletRed: Color = Color.FromUInt32(4292571283);
    public static PapayaWhip: Color = Color.FromUInt32(4294963157);
    public static PeachPuff: Color = Color.FromUInt32(4294957753);
    public static Peru: Color = Color.FromUInt32(4291659071);
    public static Pink: Color = Color.FromUInt32(4294951115);
    public static Plum: Color = Color.FromUInt32(4292714717);
    public static PowderBlue: Color = Color.FromUInt32(4289781990);
    public static Purple: Color = Color.FromUInt32(4286578816);
    public static Red: Color = Color.FromUInt32(4294901760);
    public static RosyBrown: Color = Color.FromUInt32(4290547599);
    public static RoyalBlue: Color = Color.FromUInt32(4282477025);
    public static SaddleBrown: Color = Color.FromUInt32(4287317267);
    public static Salmon: Color = Color.FromUInt32(4294606962);
    public static SandyBrown: Color = Color.FromUInt32(4294222944);
    public static SeaGreen: Color = Color.FromUInt32(4281240407);
    public static SeaShell: Color = Color.FromUInt32(4294964718);
    public static Sienna: Color = Color.FromUInt32(4288696877);
    public static Silver: Color = Color.FromUInt32(4290822336);
    public static SkyBlue: Color = Color.FromUInt32(4287090411);
    public static SlateBlue: Color = Color.FromUInt32(4285160141);
    public static SlateGray: Color = Color.FromUInt32(4285563024);
    public static Snow: Color = Color.FromUInt32(4294966010);
    public static SpringGreen: Color = Color.FromUInt32(4278255487);
    public static SteelBlue: Color = Color.FromUInt32(4282811060);
    public static Tan: Color = Color.FromUInt32(4291998860);
    public static Teal: Color = Color.FromUInt32(4278222976);
    public static Thistle: Color = Color.FromUInt32(4292394968);
    public static Tomato: Color = Color.FromUInt32(4294927175);
    public static Transparent: Color = Color.FromUInt32(16777215);
    public static Turquoise: Color = Color.FromUInt32(4282441936);
    public static Violet: Color = Color.FromUInt32(4293821166);
    public static Wheat: Color = Color.FromUInt32(4294303411);
    public static White: Color = Color.FromUInt32(4294967295);
    public static WhiteSmoke: Color = Color.FromUInt32(4294309365);
    public static Yellow: Color = Color.FromUInt32(4294967040);
    public static YellowGreen: Color = Color.FromUInt32(4288335154);
}