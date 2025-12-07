import { JSX, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function withError<T extends Object>(
  Component: React.FC<T> | ((props: T) => Promise<JSX.Element>)
) {
  return (props: T) => (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Component {...props} />
    </ErrorBoundary>
  );
}
