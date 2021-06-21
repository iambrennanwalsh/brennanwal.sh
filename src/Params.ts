export const NavMenu: App.Menu[] = [
	{name: 'Home', href: '/', exact: true},
	{name: 'About', href: '/about'},
	{name: 'Portfolio', href: '/portfolio'},
	{name: 'Blog', href: '/blog'},
	{name: 'Contact', href: '/contact'}
]

export const SocialIcons: Array<App.IconProps & App.AnchorProps> = [
	{
		type: 'github',
		size: 'md',
		href: 'https://github.com/iambrennanwalsh/'
	},
	{
		type: 'facebook',
		size: 'md',
		href: 'https://facebook.com/iambrennanwalsh/'
	},
	{
		type: 'instagram',
		size: 'md',
		href: 'https://instagram.com/iambrennanwalsh/'
	},
	{
		type: 'linkedin',
		size: 'md',
		href: 'https://www.linkedin.com/in/iambrennanwalsh/'
	}
]

export const Icons: Record<string, string> = {
	spinner: 'f110',
	success: 'e800',
	plus: 'e801',
	minus: 'e802',
	close: 'e803',
	tags: 'e804',
	edit: 'e80b',
	bookmark: 'e80b',
	right: 'e806',
	left: 'e80d',
	down: 'e80e',
	up: 'e80c',
	danger: 'e807',
	comment: 'e808',
	triangle: 'e809',
	globe: 'e80a',
	link: 'f08e',
	facebook: 'f09a',
	bars: 'f0c9',
	envelope: 'f0e0',
	github: 'f113',
	linkedin: 'f0e1',
	download: 'f0ed',
	info: 'f129',
	warning: 'f12a',
	plane: 'f1d8',
	instagram: 'f16d',
	commenting: 'f27a',
	user: 'f2bd'
}
