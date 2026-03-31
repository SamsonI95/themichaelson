import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Toaster } from 'sonner';
import { router } from './routes';
import { initAuthListener } from './features/auth/authSlice';
import './App.css';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initAuthListener());
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" richColors closeButton />
    </>
  );
}
