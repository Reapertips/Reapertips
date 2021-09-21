import { Story, Meta } from '@storybook/react';

import { Navbar, INavbar } from '.';

export default {
	title: 'Organisms/Navbar',
	component: Navbar
} as Meta;

const Template: Story<INavbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
	pageTitle: 'Page title'
};
