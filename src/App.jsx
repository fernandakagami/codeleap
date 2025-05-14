import { RouterProvider } from "react-router";
import { QueryClientProvider } from '@tanstack/react-query';

import { router } from './routes.jsx';
import { queryClient } from './lib/react-query';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
