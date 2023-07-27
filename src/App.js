import "./App.css";
import Head from "./Components/Head";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./Components/Utils/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";

function App() {

  const appRouter=createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[{
      path:"/",
      element:<MainContainer/>
    },
  {
    path:"/watch",
    element:<WatchPage/>
  }]
  }])


  return (
    <Provider store={store}>
      <div className="font-bold h-screen">
        <Head />
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
