import { Story, Meta } from '@storybook/react';

import { Post, IPost } from '@atoms/Post';

export default {
	title: 'Atoms/Post',
	component: Post
} as Meta;

const Template: Story<IPost> = (args) => <Post {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: 'How to do [this] in Reaper',
	thumbnail: {
		url: 'https://media.graphcms.com/oQUFdR0UQv6tQHH5aFTJ',
		alt: 'This is the alt text of the thumbnail'
	},
	downloadLink: 'https://reapertips-s3.s3.us-east-2.amazonaws.com/downloads/RT-IdentifyAnyScale.zip'
};
