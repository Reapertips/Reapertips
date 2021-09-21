import Image from 'next/image';

import type { IImage } from '@utils/types';
import { StyledPost } from './Post.styles';

export interface IPost {
	id?: string;
	title: string;
	downloadLink: string;
	thumbnail: IImage;
	className?: string;
}

export const Post = ({ title, thumbnail, downloadLink, className }: IPost) => {
	return (
		<StyledPost href={downloadLink} className={className}>
			<Image src={thumbnail.url} alt={title} layout="fill" objectFit="cover" />
		</StyledPost>
	);
};
