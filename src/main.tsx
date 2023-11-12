import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import App from '@components/App/App';
import { store } from '@/store';

import 'virtual:uno.css';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
	<Provider store={store}>
		<App />
	</Provider>
	,
);
