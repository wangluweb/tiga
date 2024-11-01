import React, { type FC } from 'react';

const Cnimo: FC<{ title: string }> = (props) => (
  <button onClick={() => alert(props.title)}>click me </button>
);

export default Cnimo;
