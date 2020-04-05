import React from 'react';
import { storiesOf } from '@storybook/react';

import <%= pascalEntityName %> from './<%= pascalEntityName %>.component';

storiesOf('<%= pascalEntityName %>', module)
  .add('default', () => <<%= pascalEntityName %> />);
