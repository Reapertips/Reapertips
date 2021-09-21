import { Story, Meta } from '@storybook/react';

import { SubmitButton, ISubmitButton } from '@atoms/FormElements/SubmitButton';

export default {
	title: 'Atoms/FormElements/SubmitButton',
	component: SubmitButton
} as Meta;

const Template: Story<ISubmitButton> = (args) => <SubmitButton {...args} />;

export const Default = Template.bind({});
Default.args = {
	value: 'Submit',
	disabled: false
};

export const Disabled = Template.bind({});
Disabled.args = {
	value: 'Submit',
	disabled: true
};
