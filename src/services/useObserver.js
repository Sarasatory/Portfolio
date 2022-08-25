import { useEffect, useState, useRef } from 'react';

const useObserver = (options) => {
  const [elements, setElements] = useState([]);
  const [entries, setEntries] = useState([]);

  const observer = useRef(
    new IntersectionObserver((observedEntries) => {
      //   console.log('observedEntries: ', observedEntries[0].target.id);
      //   console.log('observedEntries: ', observedEntries[0].isIntersecting);
      setEntries(observedEntries);
    }, options)
  );

  useEffect(() => {
    const currentObserver = observer.current;
    currentObserver.disconnect();

    if (elements.length > 0) {
      elements.forEach((element) => currentObserver.observe(element));
    }

    return function cleanUp() {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  }, [elements]);

  return [observer.current, setElements, entries];
};

export default useObserver;
