import React from "react";

type TState = {
    hasError: boolean;
};

export default class ErrorBoundary extends React.Component<{}, TState> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return <h1 
        style={{ color: 'red', display: 'flex', justifyContent: 'center' }}>
        App crashed
        </h1>;
    }

    return this.props.children;
  }
}