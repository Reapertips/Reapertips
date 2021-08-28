import type { IPost } from '@utils/types';
import { StyledPost } from './Post.styles';

export const Post = ({ title, thumbnail, downloadLink }: IPost) => {
	return (
		<StyledPost href={downloadLink}>
			<img src={thumbnail.url} alt={title} />
		</StyledPost>
	);
};
