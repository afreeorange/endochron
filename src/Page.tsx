import type { PropsWithChildren } from "react";

export const Page = ({ children }: PropsWithChildren) => (
  <div className="mx-auto p-4 pb-4 max-w-2xl h-full">{children}</div>
);
