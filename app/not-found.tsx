"use client";
import { ErrorComponent } from "@/components/error/Error";

export default function NotFound() {
  return (
    <ErrorComponent
      error={new Error("404")}
      isNotFound
      resetErrorBoundary={() => {}}
    />
  );
}
