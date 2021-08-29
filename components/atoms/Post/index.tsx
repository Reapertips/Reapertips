import Image from 'next/image';

import type { IPost } from '@utils/types';
import { StyledPost } from './Post.styles';

export const Post = ({ title, thumbnail, downloadLink }: IPost) => {
	return (
		<StyledPost href={downloadLink}>
			<Image src={thumbnail.url} alt={title} layout="fill" objectFit="cover" />
		</StyledPost>
	);
};
