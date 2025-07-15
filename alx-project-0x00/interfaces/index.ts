
export interface PillProps {
  title: string
}

//button component interface
type ButtonSize = "small"|"medium"|"large";
type ButtonShape = "rounded-sm"|"rounded-md"|"rounded-full";

interface ButtonStyle {
    size:ButtonSize ,
    shape:ButtonShape
}

export interface ButtonInterface {
    title:string,
     styles:ButtonStyle
}