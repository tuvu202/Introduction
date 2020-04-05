import React, { memo } from 'react';

import { LoadingStyle, Heart } from './styled';

const Loading = () => (
    <LoadingStyle>
      <Heart className="heart1"></Heart>
      <Heart className="heart2"></Heart>
      <Heart className="heart3"></Heart>
      <Heart className="heart4"></Heart>
    </LoadingStyle>)

export default memo(Loading);
