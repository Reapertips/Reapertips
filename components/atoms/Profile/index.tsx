import Image from 'next/image';
import { IProfile } from '@utils/types';
import { StyledProfile } from './Profile.styles';

export const Profile = ({ username, photo }: IProfile) => {
	return (
		<StyledProfile>
			<Image src={photo.url} alt={photo.alt} width={150} height={150} />
			<a href={`https://instagram.com/${username}`} target="_blank" rel="noopener noreferrer">
				@{username}
			</a>
		</StyledProfile>
	);
};
