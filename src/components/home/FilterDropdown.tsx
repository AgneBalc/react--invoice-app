import { InvoiceStatus } from "../../utils/types";
import { useState } from "react";
import {
  CustomCheckboxLabel,
  DropDownButton,
  DropdownWrapper,
  Wrapper,
} from "./styles/FilterDropdown.styles";

interface FilterDropdownProps {
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
}

const FilterDropdown = ({
  selectedStatus,
  setSelectedStatus,
}: FilterDropdownProps) => {
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
    <Wrapper>
      <DropDownButton
        variant="primary"
        showFilter={showFilter}
        onClick={handleFilterToggle}
      >
        Filter by status
      </DropDownButton>
      {showFilter && (
        <DropdownWrapper>
          {filters.map((filter: InvoiceStatus, index: number) => (
            <CustomCheckboxLabel htmlFor={filter} key={index}>
              <input
                type="checkbox"
                name="status"
                id={filter}
                value={filter}
                checked={selectedStatus === filter}
                onChange={() => handleFilter(filter)}
              />
              <span>{filter}</span>
            </CustomCheckboxLabel>
          ))}
        </DropdownWrapper>
      )}
    </Wrapper>
  );
};

export default FilterDropdown;
