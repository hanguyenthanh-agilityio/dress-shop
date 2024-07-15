import { Component, ErrorInfo } from "react";

// Components
import { Text } from "@chakra-ui/react";

interface State {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

interface Props {
  children: JSX.Element[] | JSX.Element;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null, errorInfo: null };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.error) {
      return (
        <Text size="extraLarge" variant="bold" data-testid="error-boundary">
          Something went wrong.
        </Text>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
