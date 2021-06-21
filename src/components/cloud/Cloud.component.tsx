import {Slugify} from '@/utils/Slugify'
import {Anchor} from '@/components'
import {StyledCloud, StyledCloudNode} from '.'

export const Cloud: App.CloudComponent = ({cloud, styles, className}) => {
	return (
		<StyledCloud
			{...(styles && {css: styles})}
			{...(className && {className: className})}>
			{cloud.map(node => (
				<Anchor key={node[0]} href={`/tag/${Slugify(node[0])}`}>
					<StyledCloudNode size={node[1]}>{node[0]}</StyledCloudNode>
				</Anchor>
			))}
		</StyledCloud>
	)
}
