import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

// Layout
import RootLayout from "./layouts/RootLayout";

// Pages
import Main from "./pages/main/Main";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Main />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App