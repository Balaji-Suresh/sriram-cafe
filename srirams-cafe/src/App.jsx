import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Layout component that includes Navbar and Footer
const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="container my-5">
        {children}
      </main>
      <Footer />
    </div>
  );
};

// Create routes with the new React Router v7 API
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>
  },
  {
    path: "/menu",
    element: <Layout><Menu /></Layout>
  },
  {
    path: "/about",
    element: <Layout><About /></Layout>
  },
  {
    path: "/gallery",
    element: <Layout><Gallery /></Layout>
  },
  {
    path: "/contact",
    element: <Layout><Contact /></Layout>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;