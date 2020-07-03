import React from 'react';

import DirectSon from './DirectSon';

export default (props) => {
  return (
    <div>
      <DirectSon text="Son 1" number={20} bool={true}></DirectSon>
      <DirectSon text="Son 2" number={5} bool={false}></DirectSon>
      <DirectSon text="Son 3" number={12} bool={true}></DirectSon>
    </div>
  )
};