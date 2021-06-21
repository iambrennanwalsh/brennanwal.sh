import {adjustHue, saturate, linearGradient} from 'polished'
import {Styles} from 'polished/lib/types/style'
import {Theme} from '.'

// Media Query
export const Mq: App.MediaQuery = {
	check: (breakpoint: string): boolean | never => {
		if (breakpoint in Theme.breakpoints) return true
		throw new Error('Invalid breakpoint provided.')
	},

	from: (breakpoint: string): string => {
		Mq.check(breakpoint)
		return `@media screen and (min-width: ${Theme.breakpoints[breakpoint]}px)`
	},

	until: (breakpoint: string, between = false): string => {
		Mq.check(breakpoint)
		const result = `and (max-width: ${Theme.breakpoints[breakpoint] - 1}px)`
		return between ? result : `@media screen ${result}`
	},

	between: (from: string, to: string): string => {
		const x = Mq.from(from)
		const y = Mq.until(to, true)
		if (Theme.breakpoints[to] <= Theme.breakpoints[from]) {
			throw new Error(
				'Invalid max-width provided. It must be greater than min-width.'
			)
		}
		return `${x} ${y}`
	}
}

export const Gradient = function (color: string): Styles {
	const initial = color in Theme.pallete ? Theme.pallete[color] : color
	const final = saturate(0.1, adjustHue(-45, initial))
	return linearGradient({
		colorStops: [`${initial} 0%`, `${final} 100%`],
		toDirection: '-45deg',
		fallback: initial
	})
}
