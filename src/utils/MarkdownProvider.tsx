import * as Components from '@/components'
import {MDXProvider} from '@mdx-js/react'
import {Icons} from '@/Params'

export const ComponentsProvider = Components

export const ScopeProvider = (merger: Record<string, unknown> = {}): Record<string, unknown> => {
	const scope = {
		icons: Icons,
		...merger
	}
	return scope
}

export const MarkdownProvider = {
	component: MDXProvider,
	props: {
		components: {
			box: Components.Box,
			content: Components.Content,
			h2: Components.Box.Heading,
			h3: Components.Content.Heading,
			p: Components.Content.Paragraph,
			a: Components.Anchor,
			pre: (props): JSX.Element => <div className="codeblock" {...props} />,
			code: Components.Content.Code
		}
	}
}
