import { MutableRefObject, useEffect, useRef } from "react"

export const useThrottle = (callback:Function, timeout:number, deps:string[]) => {
  const timeoutId:MutableRefObject<number> = useRef(Date.now());

  useEffect(
    () => {
      const handler = setTimeout(function() {
        if (Date.now() - timeoutId.current >= timeout) {
          callback();
          timeoutId.current = Date.now();
        }
      }, timeout - (Date.now() - timeoutId.current));

      return () => {
        clearTimeout(handler);
      };
    },
    deps
  );
};
