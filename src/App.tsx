import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/layout/Root";
import InvoicesPage from "./components/pages/Invoices";
import InvoiceDetailPage from "./components/pages/InvoiceDetail";
import EditInvoicePage from "./components/pages/EditInvoice";
import NewInvoicePage from "./components/pages/NewInvoice";

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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
