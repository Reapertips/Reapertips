import { Story, Meta } from '@storybook/react';

import { Button } from '@atoms/Button';
import { IButton } from '@utils/types';

export default {
	title: 'Atoms/Button',
	component: Button
} as Meta;

const Template: Story<IButton> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	title: 'Title',
	subtitle: 'Subtitle',
	color: 'blue',
	mode: 'primary'
};
