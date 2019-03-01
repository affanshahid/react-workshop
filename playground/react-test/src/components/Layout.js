import React from 'react';
import { Header } from "./Header";
import Footer from "./Footer";
import store from 'store';

export function withLayout(WrappedComponent) {
  function ReturnedComponent() {
    return (
      <div>
      <Header />
      <WrappedComponent />

      </div>
    );
  }

  return ReturnedComponent;
}