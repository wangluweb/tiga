import React, { type FC } from 'react';

const Foos: FC<{ title: string }> = (props) => <h4>{props.title}</h4>;

export default Foos;
