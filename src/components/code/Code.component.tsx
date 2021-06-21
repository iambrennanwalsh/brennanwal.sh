import {
	StyledPre,
	StyledLine,
	StyledLineContent,
	StyledLineNo,
	StyledLanguageTag
} from '.'
import Highlight, {Language, defaultProps} from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'

export const Code: App.CodeComponent = ({children, className}) => {
	const language = className.replace(/language-/, '')

	return (
		<Highlight
			{...defaultProps}
			theme={theme}
			code={children as string}
			language={language as Language}>
			{({className, style, tokens, getLineProps, getTokenProps}) => (
				<StyledPre className={className} style={style}>
					<StyledLanguageTag>{language}</StyledLanguageTag>
					{tokens.map((line, i) => (
						<StyledLine key={i} {...getLineProps({line, key: i})}>
							<StyledLineNo>{i + 1}</StyledLineNo>
							<StyledLineContent>
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({token, key})} />
								))}
							</StyledLineContent>
						</StyledLine>
					))}
				</StyledPre>
			)}
		</Highlight>
	)
}
