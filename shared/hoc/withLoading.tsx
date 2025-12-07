import { Loading } from "@/components/loading/Loading";
import { JSX, Suspense } from "react";

export default function withLoading<T extends Object>(
  Component: React.FC<T> | ((props: T) => Promise<JSX.Element>)
) {
  return (props: T) => (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
}
