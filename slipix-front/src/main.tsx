// import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';


import App from '@containers/App/index';
import store from '@/store/index';

import '@/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as Element).render(


	<Provider store={store}>
		<App />
	</Provider>
	,
);
