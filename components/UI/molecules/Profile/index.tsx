import Image from 'next/image';

import { IImage } from '@utils/types';
import { StyledProfile, ProfilePicture, Username } from './Profile.styles';

export interface IProfile {
	username: string;
	photo: IImage;
}

export const Profile = ({ username, photo }: IProfile) => {
	return (
		<StyledProfile>
			<ProfilePicture>
				<Image src={photo.url} alt={photo.alt} width={150} height={150} priority={true} />
			</ProfilePicture>
			<Username href={`https://instagram.com/${username}`} target="_blank" rel="noopener noreferrer">
				<Image src="/icons/instagram.svg" alt="Instagram logo" width={32} height={32} priority={true} />
				<p>{username.replace(/@/g, '')}</p>
			</Username>
		</StyledProfile>
	);
};
