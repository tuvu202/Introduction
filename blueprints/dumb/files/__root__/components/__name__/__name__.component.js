import React from 'react';

import <%= pascalEntityName %>Style from './styled';

const <%= pascalEntityName %> = () => {
  return (<h1>Auto generate component</h1>);
}

<%= pascalEntityName %>.propTypes = PropsConfig.propTypes;
<%= pascalEntityName %>.defaultProps = PropsConfig.defaultProps;

export default <%= pascalEntityName %>;
