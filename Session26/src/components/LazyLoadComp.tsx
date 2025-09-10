import React, { Suspense } from "react";

const Content = React.lazy(() => import("./Content"));

export default function LazyLoadComp() {
  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Lazy Loading Demo</h1>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-40">
            <div className="h-20 w-20  bg-[#999999] flex items-center justify-center">
              <div className="animate-spin rounded-full border-4  h-10 w-10 border-white border-t-[#999999]"></div>
            </div>
          </div>
        }
      >
        <Content />
      </Suspense>
    </div>
  );
}
