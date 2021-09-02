import { Story, Meta } from '@storybook/react';

import { ButtonCore, IButtonCore } from '@atoms/Button/ButtonCore';

export default {
	title: 'Atoms/Button',
	component: ButtonCore
} as Meta;

const Template: Story<IButtonCore> = (args) => <ButtonCore {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	title: 'Title',
	subtitle: 'Subtitle',
	color: 'blue',
	mode: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
	title: 'Title',
	subtitle: 'Subtitle',
	color: 'blue',
	mode: 'secondary'
};
