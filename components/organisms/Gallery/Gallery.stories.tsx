import { Story, Meta } from '@storybook/react';

import { Gallery, IGallery } from '.';

export default {
	title: 'Organisms/Gallery',
	component: Gallery
} as Meta;

const Template: Story<IGallery> = (args) => <Gallery {...args} />;

export const Default = Template.bind({});
Default.args = {
	posts: [
		{
			id: 'cksw01qj4prdx0e08svd6nbfq',
			title: 'Identify any scale in one click',
			downloadLink: 'https://reapertips-s3.s3.us-east-2.amazonaws.com/downloads/RT-IdentifyAnyScale.zip',
			thumbnail: {
				url: 'https://media.graphcms.com/oQUFdR0UQv6tQHH5aFTJ',
				alt: 'Identify any scale in one click'
			}
		},
		{
			id: 'cksw05j3spruu0e08uq5t227i',
			title: 'How to change meter colors in Reaper 6',
			downloadLink: 'https://reapertips-s3.s3.us-east-2.amazonaws.com/downloads/RT-REAPER6-ColoredMeters.zip',
			thumbnail: {
				url: 'https://media.graphcms.com/EXxEfcBYRUiw7TwzAkRr',
				alt: 'How to change meter colors in Reaper 6'
			}
		},
		{
			id: 'cksw06dywpt100b98qrkdrsk7',
			title: 'Make your MIDI look like this',
			downloadLink: 'https://reapertips-s3.s3.us-east-2.amazonaws.com/downloads/RT-MIDI-Colormaps.zip',
			thumbnail: {
				url: 'https://media.graphcms.com/UmO2qUmQjajvV61XNVuQ',
				alt: 'Make your MIDI look this'
			}
		},
		{
			id: 'cksw0747cpl6o0b56935ea508',
			title: "How to change Reaper's default click sound",
			downloadLink: 'https://reapertips-s3.s3.us-east-2.amazonaws.com/downloads/RT-MetronomeSounds.zip',
			thumbnail: {
				url: 'https://media.graphcms.com/VCuGJwwSFCkTlye89OTn',
				alt: "How to change Reaper's default click sound"
			}
		}
	]
};
