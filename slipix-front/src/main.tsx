import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, createBrowserRouter, RouterProvider } from 'react-router-dom'

import '@/styles/index.scss'

import App from '@containers/App/index'
import Home from '@components/Home';
import store from '@/store/index'

// render(
//   <Provider store={store}>
//     <Router>
//       <App />
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// )

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world</div>
    Component: Home,
  }
])

ReactDOM.createRoot(document?.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <RouterProvider router={router} /> */}
    </Provider>
  </React.StrictMode>
);
