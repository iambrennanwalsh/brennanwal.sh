export const Text: App.TextComponent = function ({element = 'p', styles, className, children}) {
	const El = element
	return (
		<El {...(styles && {css: styles})} {...(className && {className: className})}>
			{children}
		</El>
	)
}
