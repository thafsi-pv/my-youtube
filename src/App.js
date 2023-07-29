import "./App.css";
import Head from "./Components/Head";
import Body from "./Components/Layout";
import { Provider } from "react-redux";
import store from "./Components/Utils/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";
import Dashboard from "./pages/Dashboard";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);

  return (
    <Provider store={store}>
      <div className="font-bold h-screen w-screen">
       
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
