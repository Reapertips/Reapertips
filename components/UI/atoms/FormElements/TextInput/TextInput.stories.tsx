import { Story, Meta } from '@storybook/react';

import { TextInput, ITextInput } from '@atoms/FormElements/TextInput';

export default {
	title: 'Atoms/FormElements/TextInput',
	component: TextInput
} as Meta;

const Template: Story<ITextInput> = (args) => <TextInput {...args} />;

export const RequiredInput = Template.bind({});
RequiredInput.args = {
	name: 'username',
	required: true,
	disabled: false,
	label: {
		text: 'Username',
		size: 'default'
	},
	description: 'Enter your username so we can tag you on Instagram.',
	input: {
		type: 'text',
		placeholder: 'Type here'
	}
};

export const OptionalInput = Template.bind({});
OptionalInput.args = {
	name: 'username',
	required: false,
	disabled: false,
	label: {
		text: 'Username',
		size: 'default'
	},
	description: 'Enter your username so we can tag you on Instagram.',
	input: {
		type: 'text',
		placeholder: 'Type here'
	}
};

export const Textarea = Template.bind({});
Textarea.args = {
	name: 'Message',
	required: true,
	disabled: false,
	label: {
		text: 'Message',
		size: 'default'
	},
	description: 'Feel free to express your opinion!',
	textarea: {
		placeholder: 'Type here'
	}
};
