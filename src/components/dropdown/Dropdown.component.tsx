import {StyledDropdown, StyledDropdownLabel, StyledDropdownItem} from '.'
import {Icon} from '@/components'
import {useState} from 'react'
import {Slugify} from '@/utils/Slugify'

export const Dropdown: App.DropdownComponent = ({data, baseUrl, label, className, styles}) => {
	const [active, setActive] = useState(false)
	return (
		<StyledDropdown
			{...(styles && {css: styles})}
			className={`${active && 'active'} ${className && className}`}
			onClick={() => setActive(!active)}>
			<StyledDropdownLabel>
				{label} <Icon type={'down'} />
			</StyledDropdownLabel>
			<div className="dropdown-items">
				{data.map(i => (
					<StyledDropdownItem key={i} href={`${baseUrl + Slugify(i)}`}>
						{i}
					</StyledDropdownItem>
				))}
			</div>
		</StyledDropdown>
	)
}
