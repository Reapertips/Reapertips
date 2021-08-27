import { GetStaticProps, GetStaticPaths } from 'next'

type Post = {
	id: string
	title: string
	text: string
}

export default function Blog(post: Post) {
	return (
		<div>
			<h1>{post.title}</h1>
			<p>{post.text}</p>
		</div>
	)
}

export const getStaticProps: GetStaticProps = async (context) => {
	const URL = `https://.../data`
	const res = await fetch(URL)
	const data = await res.json()

	if (!data) {
		return {
			notFound: true
		}
	}

	return {
		props: { data }
	}
}

// export const getStaticPaths: GetStaticPaths = async () => {
// 	// ...
// }

export const getStaticPaths: GetStaticPaths = async () => {
	const URL = 'https://.../posts'
	const res = await fetch(URL)
	const posts: Post[] = await res.json()

	const paths = posts.map((post) => ({
		params: { id: post.id }
	}))

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false }
}
