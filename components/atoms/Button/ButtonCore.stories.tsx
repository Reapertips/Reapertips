import { Story, Meta } from '@storybook/react';

import { ButtonCore, IButtonCore } from '@atoms/Button/ButtonCore';

export default {
	title: 'Atoms/Button',
	component: ButtonCore
} as Meta;

const Template: Story<IButtonCore> = (args) => <ButtonCore {...args} />;

export const PrimaryBlue = Template.bind({});
PrimaryBlue.args = {
	title: 'Title',
	subtitle: 'Subtitle',
	color: 'blue',
	mode: 'primary'
};

export const PrimaryBlueIcon = Template.bind({});
PrimaryBlueIcon.args = {
	title: 'Title',
	subtitle: 'Subtitle',
	color: 'blue',
	mode: 'primary',
	icon: {
		url: 'https://media.graphcms.com/FGasKszQRb23cgWqUVpg',
		alt: 'Kofi logo'
	}
};

export const PrimaryRed = Template.bind({});
PrimaryRed.args = {
	title: 'Title',
	subtitle: 'Subtitle',
	color: 'red',
	mode: 'primary'
};

export const PrimaryRedIcon = Template.bind({});
PrimaryRedIcon.args = {
	title: 'Title',
	subtitle: 'Subtitle',
	color: 'red',
	mode: 'primary',
	icon: {
		url: 'https://media.graphcms.com/FGasKszQRb23cgWqUVpg',
		alt: 'Kofi logo'
	}
};

export const SecondaryBlue = Template.bind({});
SecondaryBlue.args = {
	title: 'Title',
	subtitle: 'Subtitle',
	color: 'blue',
	mode: 'secondary'
};

export const SecondaryRed = Template.bind({});
SecondaryRed.args = {
	title: 'Title',
	subtitle: 'Subtitle',
	color: 'red',
	mode: 'secondary'
};
