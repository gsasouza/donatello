import React from 'react';

const useFocus = () => {
  const [isFocused, setIsFocused] = React.useState(false);
  const ref = React.useRef(null);
  const handleFocus = () => {
    if (ref) {
      ref.current.focus();
      setIsFocused(true);
    }
  };
  const handleBlur = () => setIsFocused(false);
  return {
    isFocused,
    ref,
    handleFocus,
    handleBlur
  };
};

export default useFocus;
