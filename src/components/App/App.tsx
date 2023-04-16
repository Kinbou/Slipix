import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import ScrollToTopButton from '@components/ScrollToTopButton';
import { AppRoutes } from '@/components/App/AppRoutes';

const App = () => {
//  })
	const [imgLoaded, setImgLoaded] = useState(true);

	// const cacheImages = async (srcArray: any) => {
	//   const images = [...srcArray]
	//   const promises = images.map((src) => new Promise<void>((resolve, reject) => {
	//     const img = new Image()
	//     img.src = src
	//     img.onload = resolve()
	//     img.onerror = reject()
	//   }))
	//   await Promise.all(promises)
	//   setImgLoaded(true)
	// }
	// useEffect(() => {
	// const format = useResolution()
	// const imagesCopy = { ...dataImages[appClass] }
	// const images = [...imagesCopy.otherImage]
	// images.push(imagesCopy.background[format])
	// cacheImages(images)
	// }, [appClass])

	return (
		<div className="app">
			<main>
				<AnimatePresence>
					<ScrollToTopButton />
					<AppRoutes />
				</AnimatePresence>
				{/* <Analytics id="UA-176591379-1" debug> */}
				{/* </Analytics> */}
			</main>
		</div>
	);
};

export default App;
