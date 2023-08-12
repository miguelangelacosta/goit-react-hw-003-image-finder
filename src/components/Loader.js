import React from 'react';

import { Oval } from 'react-loader-spinner';

const CustomLoader = () => {
  return (
    <div className="loader">
      <Oval color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default CustomLoader;
