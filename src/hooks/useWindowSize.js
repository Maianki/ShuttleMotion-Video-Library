import React, { useState } from "react";

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  return <div>useWindowSize</div>;
}
