// import { configure } from '@storybook/react';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);

// function loadStories() {
//     require('../stories/index.js');
// }

// configure(loadStories, module);

configure(require.context('../src', true, /\.stories\.js$/), module);
