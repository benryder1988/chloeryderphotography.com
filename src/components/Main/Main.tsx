import React from 'react';

interface Props {
  component: React.FC<any>;
}

export const Main: React.FC<Props> = (props) => {
  const { component: Component } = props;
  return (
    <>
      <main className="flex flex-1 flex-col">
        <Component />
      </main>
    </>
  );
};
