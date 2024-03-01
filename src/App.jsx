import { useState } from 'react'
import { Tooltip } from './components//Tooltip'
function App() {
	const [count, setCount] = useState(0)
	return (
		<>
			<Tooltip text={'Show Tooltip'} placement='bottom'>
				<button>Наведи</button>
			</Tooltip>
		</>
	)
}

export default App
