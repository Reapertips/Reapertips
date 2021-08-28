import { IProfile } from '@utils/types';
import { StyledProfile } from './Profile.styles';

export const Profile = ({ username, photo }: IProfile) => {
	return (
		<StyledProfile>
			<img src={photo.url} alt="Profile picture of Reapertips's founder Alejandro" />
			<a href={`https://instagram.com/${username}`} target="_blank" rel="noopener noreferrer">
				@{username}
			</a>
		</StyledProfile>
	);
};
