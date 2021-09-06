import { Story, Meta } from '@storybook/react';

import { LinkButton, ILinkButton } from '@atoms/Button/LinkButton';

export default {
	title: 'Atoms/Button',
	component: LinkButton
} as Meta;

const Template: Story<ILinkButton> = (args) => <LinkButton {...args} />;

export const ExternalLink = Template.bind({});
ExternalLink.args = {
	title: 'Title',
	subtitle: 'Subtitle',
	color: 'red',
	mode: 'primary',
	href: 'https://ko-fi.com/reapertips'
};
