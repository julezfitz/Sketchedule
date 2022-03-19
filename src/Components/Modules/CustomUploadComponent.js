import React, { useRef, forwardRef } from 'react';

export default forwardRef((props, ref) => {
  const {
    component: Component, onFileUpload, children, ...rest
  } = props;

  const fileInput = useRef();

  return (
    /* eslint-disable react/jsx-props-no-spreading */
    <Component onClick={() => fileInput.current.click()} ref={ref} {...rest}>
      {children}
      <input
        type="file"
        onChange={onFileUpload}
        id="file"
        ref={fileInput}
        name="file"
        style={{ display: 'none' }}
      />
    </Component>
  );
});
