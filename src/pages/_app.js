import '@/app/globals.css';
import { AuthProvider } from '@/contexts/AuthContext';
import { EventProvider } from '@/contexts/EventContext';
import { Toaster } from 'sonner';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <EventProvider>
        <Component {...pageProps} />
        <Toaster position="bottom-center" richColors />
      </EventProvider>
    </AuthProvider>
  );
}
