/* ----------------
  ErrorBoundary
---------------- */

import React, { Component } from "react";
import { Heading } from "./Heading";

interface ComponentState {
  hasError: boolean;
}

export default class ErrorBoundary extends Component {
  state: ComponentState;

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    return this.state.hasError ? (
      <Heading>An error has occurred.</Heading>
    ) : (
      this.props.children
    );
  }
}
