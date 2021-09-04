import Image from 'next/image';

import { IImage } from '@utils/types';
import { StyledProfile, Username } from './Profile.styles';

export interface IProfile {
	username: string;
	photo: IImage;
}

export const Profile = ({ username, photo }: IProfile) => {
	return (
		<StyledProfile>
			<Image src={photo.url} alt={photo.alt} width={150} height={150} priority={true} />
			<Username href={`https://instagram.com/${username}`} target="_blank" rel="noopener noreferrer">
				@{username.replace(/@/g, '')}
			</Username>
		</StyledProfile>
	);
};
