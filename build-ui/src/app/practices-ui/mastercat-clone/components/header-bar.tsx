import React from 'react';
import styled from 'styled-components';

const HeaderTopBar: React.FC = () => {
  return (
    <div className="w-full h-full top-0 flex bg-fuchsia-400/50 ">
      <div className="px-8 py-5 flex justify-between w-full -z-10">
        <div className="-z-10">icon</div>
        <div className="">content</div>
        <div>menu</div>
      </div>
    </div>
  );
};

export default HeaderTopBar;
