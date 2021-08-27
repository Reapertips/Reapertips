import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Page } from '@organisms/Page'
import * as HeaderStories from '@molecules/Header/Header.stories'

export default {
	title: 'Organisms/Page',
	component: Page
} as ComponentMeta<typeof Page>

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
	...HeaderStories.LoggedIn.args
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
	...HeaderStories.LoggedOut.args
}
