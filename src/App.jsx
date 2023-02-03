import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help">
        <Route path="faq" element={<h1>faq</h1>} />
        <Route path="contact" element={<h1>contact</h1>} />
      </Route>
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
