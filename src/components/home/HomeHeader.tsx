import { useNavigate } from "react-router-dom";
import { Invoice } from "../../utils/types";
import {
  Heading,
  HomeHeaderContainer,
  InvoicesCount,
  NewInvoiceButton,
} from "./styles/HomeHeader.styles";
import FilterDropdown from "./FilterDropdown";

interface HomeHeaderProps {
  invoices: Invoice[];
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
}

const HomeHeader = ({
  invoices,
  selectedStatus,
  setSelectedStatus,
}: HomeHeaderProps) => {
  const navigate = useNavigate();

  return (
    <HomeHeaderContainer>
      <div>
        <Heading>Invoices</Heading>
        {invoices.length ? (
          <InvoicesCount>{invoices.length} Invoices</InvoicesCount>
        ) : (
          <InvoicesCount>No invoices</InvoicesCount>
        )}
      </div>
      <FilterDropdown
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />
      <NewInvoiceButton
        icon={true}
        variant="primary"
        onClick={() => {
          navigate("/new");
        }}
      >
        New <span>Invoice</span>
      </NewInvoiceButton>
    </HomeHeaderContainer>
  );
};

export default HomeHeader;
