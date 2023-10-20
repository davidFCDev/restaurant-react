import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './Home';
import ErrorPage from './routes/ErrorPage';
import LegalAdvice from './routes/LegalAdvice';
import Cookies from './routes/Cookies';
import Privacity from './routes/Privacity';
import ContactPage from './routes/ContactPage';
import BookingPage from './routes/BookingPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/legal',
		element: <LegalAdvice />,
	},
	{
		path: '/privacity',
		element: <Privacity />,
	},
	{
		path: '/cookies',
		element: <Cookies />,
	},
	{
		path: '/contact',
		element: <ContactPage />,
	},
	{
		path: '/booking',
		element: <BookingPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
