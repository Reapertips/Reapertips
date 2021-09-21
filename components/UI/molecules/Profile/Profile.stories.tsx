import { Story, Meta } from '@storybook/react';

import { Profile, IProfile } from '.';

export default {
	title: 'Molecules/Profile',
	component: Profile
} as Meta;

const Template: Story<IProfile> = (args) => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {
	username: '@reapertips',
	photo: {
		url: 'https://media.graphcms.com/XOaU7wPRFeDjcRkhZC05',
		alt: "Profile picture of Alejandro Hernandez (Reapertips's founder)"
	}
};
