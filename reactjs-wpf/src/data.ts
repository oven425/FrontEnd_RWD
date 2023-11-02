import { type } from "os";

// export const products = [
//     { title: 'Cabbage', id: 1 },
//     { title: 'Garlic', id: 2 },
//     { title: 'Apple', id: 3 },
//   ];

export type product={
    title:string,
    id:number
  }

  export const products:Array<product> = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];