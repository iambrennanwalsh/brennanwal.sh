import {getStyledHeading} from '.'

export const Heading: App.HeadingComponent = ({level = 1, styles, className, children}) => {
	const Style = getStyledHeading(level)
	return (
		<Style {...(styles && {css: styles})} {...(className && {className: className})}>
			{children}
		</Style>
	)
}

const H1: App.SpecificHeadingComponent = props => <Heading level={1} {...props} />
const H2: App.SpecificHeadingComponent = props => <Heading level={2} {...props} />
const H3: App.SpecificHeadingComponent = props => <Heading level={3} {...props} />
const H4: App.SpecificHeadingComponent = props => <Heading level={4} {...props} />
const H5: App.SpecificHeadingComponent = props => <Heading level={5} {...props} />
const H6: App.SpecificHeadingComponent = props => <Heading level={6} {...props} />

Heading.H1 = H1
Heading.H2 = H2
Heading.H3 = H3
Heading.H4 = H4
Heading.H5 = H5
Heading.H6 = H6
