import React from 'react';
import { ErrorBoundary } from '../../src/elements/ErrorBoundary';

// Placeholder child component in which to simulate error
const ProblemChild = () => null;

const defaultConfig = {
  debug: {
    jsError: false,
    apiLog: false,
  },
};

test('<ErrorBoundary/> when no errors are caught in a child component', () => {
  const wrapper = shallow(
    <ErrorBoundary config={defaultConfig}>
      <h1>No problem here</h1>
    </ErrorBoundary>,
  );
  expect(wrapper.contains(<h1>No problem here</h1>)).toBeTruthy();
  expect(wrapper.state()).toEqual({ hasError: false, error: null, errorInfo: null });
});

test('<ErrorBoundary/> when an error is caught in a child component', () => {
  const wrapper = shallow(
    <ErrorBoundary config={defaultConfig}>
      <ProblemChild />
    </ErrorBoundary>,
  );
  const error = new Error('oh no');
  wrapper.find(ProblemChild).simulateError(error);
  expect(wrapper.state()).toEqual({
    hasError: true,
    error,
    errorInfo: {
      componentStack: `
    in ProblemChild (created by ErrorBoundary)
    in ErrorBoundary (created by WrapperComponent)
    in WrapperComponent`,
    },
  });
  expect(wrapper.find('.error-boundary')).toHaveLength(1);
  expect(wrapper.find('.error-details')).toHaveLength(0);
  expect(
    wrapper.contains(
      <h2 className="error-title">
        <i className="far fa-exclamation-triangle error-icon" />
        {' '}
Something went wrong
      </h2>,
    ),
  ).toBe(true);
});

test('<ErrorBoundary/> with custom error rendering', () => {
  const customErrorRender = <h1>Custom error message</h1>;
  const wrapper = shallow(
    <ErrorBoundary config={defaultConfig} customErrorRender={customErrorRender}>
      <ProblemChild />
    </ErrorBoundary>,
  );
  const error = new Error('oh no');
  wrapper.find(ProblemChild).simulateError(error);
  expect(wrapper.find('.error-boundary')).toHaveLength(0);
  expect(wrapper.contains(<h1>Custom error message</h1>)).toBeTruthy();
});

test('<ErrorBoundary/> with jsError matches snapshot', () => {
  const configWithJsError = {
    debug: {
      jsError: true,
      apiLog: false,
    },
  };
  const wrapper = shallow(
    <ErrorBoundary config={configWithJsError}>
      <ProblemChild />
    </ErrorBoundary>,
  );
  const error = new Error('oh no');
  wrapper.find(ProblemChild).simulateError(error);
  expect(wrapper.find('.error-details')).toHaveLength(1);
  expect(wrapper).toMatchSnapshot();
});
