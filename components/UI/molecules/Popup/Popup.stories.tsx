import { Story, Meta } from '@storybook/react';

import { Popup, IPopup } from '.';

export default {
	title: 'Molecules/Popup',
	component: Popup
} as Meta;

const Template: Story<IPopup> = (args) => <Popup {...args} />;

export const Default = Template.bind({});
Default.args = {
	text: {
		html: '<p>Please <strong>bookmark</strong> this page, so anytime you have a cool thing to share about REAPER you will have quick access to this</p>'
	},
	icon: {
		url: 'https://media.graphcms.com/aAwke1dmSqq4YNqRKI5Q',
		alt: 'White bookmark icon'
	},
	closable: false
};

export const Closable = Template.bind({});
Closable.args = {
	text: {
		html: '<p>Click on the related post to get the files!</p>'
	},
	icon: {
		url: 'https://media.graphcms.com/9IaP7VRTPWJFJ1DMyxwO',
		alt: 'White cursor icon'
	},
	closable: true
};
