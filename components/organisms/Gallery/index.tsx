import { StyledGallery, StyledPost } from './Gallery.styles';
import { IPost } from '@components/atoms/Post';

export interface IGallery {
	posts: IPost[];
}

export const Gallery = ({ posts }: IGallery) => {
	return (
		<StyledGallery>
			{posts.map((post) => (
				<StyledPost key={post.id} {...post} />
			))}
		</StyledGallery>
	);
};
