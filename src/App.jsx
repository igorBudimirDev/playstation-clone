import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from "react-router-dom";
import BigNav from "./components/BigNav";
import PhoneNav from "./components/PhoneNav";
import Home from "./components/Home";
import Shop from "./components/Shop";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider  router={router}/>
    </div>
  );
}

const Root = () => {
  return (
    <>
      <PhoneNav />
      <BigNav />

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
