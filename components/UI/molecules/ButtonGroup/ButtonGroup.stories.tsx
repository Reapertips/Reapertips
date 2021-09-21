import { Story, Meta } from '@storybook/react';

import { ButtonGroup, IButtonGroup } from '.';

export default {
	title: 'Molecules/ButtonGroup',
	component: ButtonGroup
} as Meta;

const Template: Story<IButtonGroup> = (args) => <ButtonGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
	buttons: [
		{
			id: 'cksvyx4c8pc9a0b56191wuafv',
			title: 'Support the project',
			icon: {
				url: 'https://media.graphcms.com/FGasKszQRb23cgWqUVpg',
				alt: 'ko-fi.com logo'
			},
			subtitle: 'Help me fund the reapertips app!',
			href: 'https://ko-fi.com/reapertips',
			color: 'red',
			mode: 'primary'
		},
		{
			id: 'cksvyyemwpgkd0c56txf2772g',
			title: 'Submit your tip',
			subtitle: 'and get credited in my next post',
			href: '/submit',
			color: 'blue',
			mode: 'primary'
		},
		{
			id: 'cksvyynw8pizo0b54u4ulxfr9',
			title: 'Downloads',
			href: '/downloads',
			color: 'blue',
			mode: 'primary'
		}
	]
};
