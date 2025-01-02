import React from 'react';

import router from './routes/router';
import { RouterProvider } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
