import React from 'react';
import './style.css';
import ShowMore from '../src/ShowMore/ShowMore';
export default function App() {
  let Example1 = ['Data-1', 'Data-2', 'Data-3', 'Data-4'];
  let Example2 = ['a', 'b', 'c', 'd'];
  return (
    <div>
      <h1>Show More Options</h1>

      <h4>Show More Options- Type 1</h4>

      <ShowMore
        documentdata={Example1}
        displaydatacount="3"
        showmoreflag="Table"
        attributes="text"
      />
      <h4>Show More Options- Type 2</h4>
      <ShowMore
        documentdata={Example2}
        displaydatacount="3"
        showmoreflag="Table"
        attributes="character"
      />
    </div>
  );
}
