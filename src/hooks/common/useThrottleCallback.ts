import { useCallback, useEffect, useRef } from 'react';

type ThrottleCallback = (e: Event) => void;

export default function useThrottleCallback(
  callback: ThrottleCallback,
  delay: number,
  eventType: 'wheel' | 'scroll'
) {
  const throttleRef = useRef<any>(null);

  const throttledCallback = useCallback(
    (e: Event) => {
      if (!throttleRef.current) {
        throttleRef.current = true;
        callback(e);
        setTimeout(() => {
          throttleRef.current = false;
        }, delay);
      }
    },
    [callback, delay]
  );

  useEffect(() => {
    if (eventType) {
      window.addEventListener(eventType, throttledCallback, { passive: false });
      return () => {
        window.removeEventListener(eventType, throttledCallback);
        clearTimeout(throttleRef.current);
      };
    } else {
      return () => {
        clearTimeout(throttleRef.current);
      };
    }
  }, [eventType, throttledCallback]);

  return throttledCallback;
}

// import { useCallback, useEffect, useRef } from 'react';

// type ThrottleCallback = (e: Event) => void;

// export default function useThrottleCallback(
//   callback: ThrottleCallback,
//   delay: number,
//   eventType: 'wheel' | 'scroll'
// ) {
//   const throttleRef = useRef<number | null>(null);

//   const throttledCallback = useCallback(
//     (e: Event) => {
//       if (!throttleRef.current) {
//         callback(e);
//         throttleRef.current = window.setTimeout(() => {
//           throttleRef.current = null;
//         }, delay);
//       }
//     },
//     [callback, delay]
//   );

//   useEffect(() => {
//     if (eventType) {
//       window.addEventListener(eventType, throttledCallback, { passive: false });
//       return () => {
//         window.removeEventListener(eventType, throttledCallback);
//         if (throttleRef.current !== null) {
//           clearTimeout(throttleRef.current);
//         }
//       };
//     } else {
//       return () => {
//         if (throttleRef.current !== null) {
//           clearTimeout(throttleRef.current);
//         }
//       };
//     }
//   }, [eventType, throttledCallback]);

//   return throttledCallback;
// }
