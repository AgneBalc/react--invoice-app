import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconPlus } from "../../assets/icon-plus.svg";
import { Invoice, InvoiceStatus } from "../../utils/types";
import { ReactComponent as IconDown } from "../../assets/icon-arrow-down.svg";
import Button from "../ui/Button";

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
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const filters: InvoiceStatus[] = ["paid", "pending", "draft"];

  const handleFilterToggle = () => {
    setShowFilter(!showFilter);
  };

  const handleFilter = (status: string) => {
    setSelectedStatus(status === selectedStatus ? "" : status);
    setShowFilter(false);
  };

  return (
    <div className="heading">
      <div>
        <h1>Invoices</h1>
        {invoices.length ? (
          <p>{invoices.length} Invoices</p>
        ) : (
          <p>No invoices</p>
        )}
      </div>
      <div>
        <div onClick={handleFilterToggle}>
          Filter by status
          <IconDown />
        </div>
        {showFilter &&
          filters.map((filter, index) => (
            <label htmlFor={filter} key={index}>
              <input
                type="checkbox"
                name="status"
                id={filter}
                value={filter}
                checked={selectedStatus === filter}
                onChange={() => handleFilter(filter)}
              />
              {filter}
            </label>
          ))}
      </div>
      <Button className="new">
        <Link to="new">
          <IconPlus />
          <span>New Invoice</span>
        </Link>
      </Button>
    </div>
  );
};

export default HomeHeader;
