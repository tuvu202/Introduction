import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button.component';

storiesOf('Button', module)
  .add('default', () => <Button />);
