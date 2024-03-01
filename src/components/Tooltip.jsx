import React, { useState } from 'react'

export const Tooltip = ({ text, children, placement = 'top' }) => {
	const [isVisible, setIsVisible] = useState(false)

	return (
		<div
			className={`tooltip-container tooltip-container-${placement}`}
			onMouseEnter={() => setIsVisible(true)}
			onMouseLeave={() => setIsVisible(false)}
		>
			{children}
			{isVisible && (
				<div className={`tooltip tooltip-${placement}`}>{text}</div>
			)}
		</div>
	)
}
