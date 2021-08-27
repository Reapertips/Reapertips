import { ReactNode } from 'react'

import SEO from '@templates/SEO'

interface Props {
	pageTitle: string
	pageDescription: string
	children: ReactNode
}

const Layout: React.FC<Props> = ({ pageTitle, pageDescription, children }) => {
	return (
		<div>
			<SEO pageTitle={pageTitle} pageDescription={pageDescription} />
			{children}
		</div>
	)
}

export default Layout
