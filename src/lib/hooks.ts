import { useEffect, useRef } from "react";
import isEqual from "lodash/isEqual";

const useDeepCompareEffect = <T>(effect: () => void, dependencies: T): void => {
  const prevDependenciesRef = useRef<T>();

  if (!isEqual(prevDependenciesRef.current, dependencies)) {
    prevDependenciesRef.current = dependencies;
  }

  useEffect(effect, [prevDependenciesRef.current]);
};

export default useDeepCompareEffect;
