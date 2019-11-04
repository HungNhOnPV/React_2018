import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import WeeklySongListItem from '../components/WeeklySongListItem';

storiesOf('WeeklySongListItem', module)
    .add(
        'default',
        () => (
            <WeeklySongListItem
                order='01'
                title="Em không thể"
                singer="Tiên Tiên, Touliver"
                viewCount={3000}
            />
        )
    );