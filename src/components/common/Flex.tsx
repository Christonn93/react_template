import React from 'react';

type FlexProps = {
  css?: {
    column?: boolean;
    gap?: string | number;
    [key: string]: unknown;
  };
  children: React.ReactNode;
};

const Flex: React.FC<FlexProps> = ({ css = {}, children }) => {
  const defaultStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: css.columns ? 'column' : 'row',
    gap: css.gap ?? '10px',
    ...css,
  };

  return <div style={defaultStyles}>{children}</div>;
};

export default Flex;
