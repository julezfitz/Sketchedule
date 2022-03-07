import React, { forwardRef } from 'react';
import StyledHeading from './styles/styles';

function Heading(props, ref) {
  const {
    className, size, color, style, children,
  } = props;
  return (
    <StyledHeading
      className={`heading-wrapper ${className || ''}`}
      size={size}
      color={color}
      style={style}
    >
      <h2 ref={ref}>{children}</h2>
    </StyledHeading>
  );
}

export default forwardRef(Heading);
