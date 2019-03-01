import React, { Component, ReactNode, ReactChild } from 'react';
import './App.css';

type HeaderProps = {
  name: number;
  date: string;
  onClick: (a: number, b: number) => number
};

function Header(props: HeaderProps) {
  return (
    <div>
      Hello from Header
      {props.name}
      {props.date}
    </div>
  );
}

type FooterProps = {
  foo: string;
}

class Footer extends Component<FooterProps> {
  render() {
    return (
      <div>
        FOOTER {this.props.foo}
      </div>
    )
  }
}

function abc(a: number, b: number) {
  return 1
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          name={132}
          date="121321"
          onClick={abc}
        />
        <Footer foo="affan" />
      </div>
    );
  }
}

export default App;
