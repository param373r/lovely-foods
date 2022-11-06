import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import GlobalLoader from './components/ui/Loadings/GlobalLoader';

import { AuthContextProvider } from './store/AuthContext';


const App = React.lazy(() => import('./App'));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Suspense fallback={<GlobalLoader />}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </Suspense>
  </BrowserRouter>
);

