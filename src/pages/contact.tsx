import {Box, Content, PageTitle, Seo} from '@/components'
import {ContactForm} from '@/forms'
import {Main} from '@/layouts'
import dynamic from 'next/dynamic'
import {useContext, useEffect} from 'react'
import {ComponentsContext, AddResourceAction, ApiContext} from '@/contexts'
import {GetStaticProps, InferGetStaticPropsType} from 'next'
import {LayoutState} from '@/utils/LayoutState'
import {getAll} from '@/utils/Api'

const Contact: App.Component = ({
	layoutState
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
	const meta = {
		title: 'Contact Me',
		description:
			"Get in touch with me using the form below. Alternatively you may email me directly at <a href='mailto:mail@brennanwal.sh'>mail@brennanwal.sh</a>."
	}
	const Map = dynamic(() => import('@/components/map').then(component => component.Map), {
		ssr: false
	})
	const {featured, categories, cloud} = layoutState
	const {state, dispatch} = useContext(ApiContext)
	useEffect(() => {
		if (!state.featured) dispatch(AddResourceAction({featured: featured}))
		if (!state.categories) dispatch(AddResourceAction({categories: categories}))
		if (!state.cloud) dispatch(AddResourceAction({cloud: cloud}))
	}, [])
	return (
		<Main>
			<Seo {...meta} />
			<PageTitle {...meta} />
			<ComponentsContext.Provider value={{key: process.env.NEXT_PUBLIC_MAPBOX_KEY}}>
				<Map />
			</ComponentsContext.Provider>
			<Box>
				<Box.Heading>Lets Get In Touch</Box.Heading>
				<Content className="withForm">
					<ContactForm />
				</Content>
			</Box>
		</Main>
	)
}

export default Contact

export const getStaticProps: GetStaticProps = async () => {
	const layoutState = LayoutState(getAll('articles') as App.ArticleResource[])
	return {
		props: {
			layoutState
		}
	}
}
