import { Story, Meta } from '@storybook/react';

import { RadioGroup, IRadioGroup } from '@atoms/FormElements/RadioGroup';

export default {
	title: 'Atoms/FormElements/RadioGroup',
	component: RadioGroup
} as Meta;

const Template: Story<IRadioGroup> = (args) => <RadioGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: 'Title',
	name: 'group-name',
	options: ['Option 1', 'Option 2'],
	selected: 'Option 1'
};
