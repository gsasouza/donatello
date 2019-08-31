import React from 'react';

const useScrollToBottom = ({ items }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [ref, items]);
  return ref;
};

export default useScrollToBottom;
