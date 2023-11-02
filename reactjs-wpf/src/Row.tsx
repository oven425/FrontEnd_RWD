import React from "react";
type RowProps={
  title:string,
  isHighlighted:boolean
}
export default function Row(props:RowProps) {
    return (
      <div className={[
        'Row',
        props.isHighlighted ? 'RowHighlighted' : ''
      ].join(' ')}>
        {props.title}
      </div>
    );
  }