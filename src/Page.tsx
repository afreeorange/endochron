import type { PropsWithChildren } from "react";

export const Page = ({ children }: PropsWithChildren) => (
  <div className="grid mx-auto max-w-2xl h-full">
    <div className="flex flex-col p-8 pb-4">{children}</div>
  </div>
);
