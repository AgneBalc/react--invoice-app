import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/layout/Root";
import InvoicesPage from "./pages/Invoices";
import InvoiceDetailPage from "./pages/InvoiceDetail";
import EditInvoicePage from "./pages/EditInvoice";
import NewInvoicePage from "./pages/NewInvoice";

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
