import { Button } from 'react-native';

// export default {
//   title: 'React Native Button',
//   component: Button,
//   args: {
//     title: 'Hello world',
//   },
// };

// export const Basic = (args: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<Button> & Readonly<ButtonProps>) => <Button {...args} />;

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

storiesOf('Button', module).add('Default', () => (
  <Button title="Default" color="blue" onPress={action('Default button')} />
));