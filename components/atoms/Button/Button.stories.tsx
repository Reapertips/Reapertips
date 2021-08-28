import { Story, Meta } from '@storybook/react'

import { Button, IButton} from '@atoms/Button'

export default {
	title: 'Atoms/Button',
	component: Button
} as Meta

const Template: Story<IButton> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
	title: 'Title',
	subtitle: 'Subtitle',
	color: 'blue',
	type: 'primary'
}