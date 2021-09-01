import styled from 'styled-components';

import { TopMessage } from '@components/atoms/TopMessage';
import { Navbar } from '@components/organisms/Navbar';
import { Form } from '@components/organisms/Form';
import Layout from '@components/templates/Layout';
import Container from '@components/templates/Container';

import { fetch, getSubmitPage } from '@utils/queries';
import type { ISubmit } from '@utils/types';

const StyledTopMessage = styled(TopMessage)`
	margin-bottom: 2.5rem;
`;

const Submit = (props: ISubmit) => {
	const { pageTitle, pageDescription, seo, topMessageIcon, topMessageText } = props;

	return (
		<Layout pageTitle={pageTitle} pageDescription={pageDescription} ogImage={seo.ogImage.url}>
			<Navbar pageTitle={pageTitle} />
			<Container>
				<StyledTopMessage icon={topMessageIcon} text={topMessageText} closable={true} />
				<Form {...props} />
			</Container>
		</Layout>
	);
};

export default Submit;

export const getStaticProps = async () => {
	const data = (await fetch(getSubmitPage)).submitPages[0];

	return {
		props: data
	};
};
