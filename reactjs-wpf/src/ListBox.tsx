import React, { ReactNode } from 'react';
import { useState } from 'react';
import { product } from './data';

type ListPorps={
  items:Array<product>
  renderItem(item:product, isHighlighted:boolean):ReactNode
}
export default function List(props:ListPorps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="List">
      {props.items.map((item, index) => {
        const isHighlighted = index === selectedIndex;
        return props.renderItem(item, isHighlighted);
      })}
      <hr />
      <button onClick={() => {
        setSelectedIndex(i =>
          (i + 1) % props.items.length
        );
      }}>
        下一步
      </button>
    </div>
  );
}

