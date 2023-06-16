// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './pages/Login';
import Header from './components/Header';
// import Dashboard from "./pages/Dashboard";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//   },
//   {
//     path: "/dashboard",
//     element: <Dashboard />,
//   }
// ]);

function App() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column"
    }}>
      <Header />
      <Login />
      {/* <RouterProvider router={router} /> */}
    </div>
  );
}

export default App;
