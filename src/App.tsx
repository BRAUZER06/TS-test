import { title } from "process";
import React from "react";

type TitleProps = {
  title: string;
  children?:string
  test?:string
};

const Title = ({ title, test = 'test' }: TitleProps) => <h1>{title}{test}</h1>;

const SectionLeft = ({ title, children }:TitleProps) => {
  return (
    <h1>
      {title}
      {children}
    </h1>
  );
};

const App = () => <Title title='test'/>

export default App;
