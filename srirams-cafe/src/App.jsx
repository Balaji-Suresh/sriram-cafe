import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Subscription from "./pages/Subscription";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Layout component that includes Navbar and Footer
const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="container mt-3 mb-5">
        {children}
      </main>
      <Footer />
    </div>
  );
};

// Create routes with the new React Router v7 API
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
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
  },
  {
    path: "/account",
    element: <Layout><Account /></Layout>
  },
  {
    path: "/subscription",
    element: <Layout><Subscription /></Layout>
  }
]);

function App() {
  // Redirect to login page initially
  React.useEffect(() => {
    if (window.location.pathname === '/') {
      window.location.href = '/login';
    }
  }, []);
  
  return <RouterProvider router={router} />;
}

export default App;