import { Story, Meta } from '@storybook/react';

import { Form, IForm } from '.';

export default {
	title: 'Organisms/Form',
	component: Form
} as Meta;

const Template: Story<IForm> = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
	tipLabel: '✏️ Enter your reapertip here',
	tipDescription:
		'Feel free to upload and link anything that can illustrate your idea! Ex: screenshots, screen recordings, videos, gifs, whatever. You can also send me a video on instagram!',
	tipPlaceholder: 'Type here',
	usernameLabel: 'Username',
	usernamePlaceholder: 'Enter name or instagram username',
	creditsLabel: 'Would you like to be credited?',
	creditsOptions: ['Yes, include my username in the design.', "No, it's okay."],
	submitButton: 'Submit'
};
