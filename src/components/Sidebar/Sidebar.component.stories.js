import React from 'react';
import { storiesOf } from '@storybook/react';

import Sidebar from './Sidebar.component';

storiesOf('Sidebar', module)
  .add('default', () => <Sidebar />);
