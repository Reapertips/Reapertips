import Image from 'next/image';

import type { IImage } from '@utils/types';
import { StyledPost } from './Post.styles';

export interface IPost {
	id?: string;
	title: string;
	downloadLink: string;
	thumbnail: IImage;
}

export const Post = ({ title, thumbnail, downloadLink }: IPost) => {
	return (
		<StyledPost href={downloadLink}>
			<Image src={thumbnail.url} alt={title} layout="fill" objectFit="cover" />
		</StyledPost>
	);
};
