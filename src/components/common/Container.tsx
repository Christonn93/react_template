import React from 'react';

type ContainerProps = {
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  borderless?: boolean;
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ sm = false, md = false, lg = false, xl = false, borderless = false, children }) => {
  let containerWidth = '100%';

  if (lg) containerWidth = '1024px';
  if (md) containerWidth = '800px';
  if (sm) containerWidth = '100%';
  if (xl) containerWidth = '1200px';

  return (
    <div
      className={`container ${borderless ? 'container--borderless' : 'container--bordered'}`}
      style={{
        width: containerWidth,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
