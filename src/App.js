// App.js
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Certificate from "./components/Certificate";

const routes = [
  {
    path: '/',
    element:
    <Body />,
    children: [ {
      path: "/",
      element: <Home />
    },
    {
      path: "/experience",
      element: <Experience />
    },
    {
      path: "/skills",
      element: <Skills />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/certificate",
      element: <Certificate />
    }
  ]}
]

function App () {
  const appRouter = createBrowserRouter(routes);

  return (
    <div className='flex flex-row h-screen overflow-x-hidden'>
      <Sidebar />
      <div className='flex-1 overflow-y-auto overflow-x-hidden md:overflow-y-hidden md:overflow-x-hidden'>
        <RouterProvider router={ appRouter }>
          <Body/>
        </RouterProvider>
      </div>
    </div>
  );
}

export default App;
