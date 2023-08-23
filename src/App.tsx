import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/layout/Root";
import InvoicesPage from "./pages/Invoices";
import InvoiceDetailPage from "./pages/InvoiceDetail";
import EditInvoicePage from "./pages/EditInvoice";
import NewInvoicePage from "./pages/NewInvoice";
import { useAppSelector } from "./hooks/redux-hooks";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import themes from "./styles/themes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <InvoicesPage /> },
      {
        path: ":id",
        children: [
          { index: true, element: <InvoiceDetailPage /> },
          { path: "edit", element: <EditInvoicePage /> },
        ],
      },
      { path: "new", element: <NewInvoicePage /> },
    ],
  },
]);

const App = () => {
  const { theme } = useAppSelector((state) => state.theme);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeProvider
      theme={theme === "dark" ? themes.darkMode : themes.lightMode}
    >
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
