import {styled} from '@/styles'

export const StyledContent = styled('section', {
	width: '100%',
	mx: 'auto',
	p: '0 $6',
	height: '100%',
	overflowX: 'hidden',

	'@tablet': {
		width: '65%',
		padding: 0
	},

	'@desktop': {
		width: '70%'
	},

	'@widescreen': {
		width: '75%'
	}
})
