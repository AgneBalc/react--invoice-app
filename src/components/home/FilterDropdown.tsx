import { ReactComponent as IconDown } from "../../assets/icon-arrow-down.svg";

interface FilterDropdownProps {
  handleFilter: (status: string) => void;
  selectedStatus: string;
  handleFilterToggle: () => void;
  showFilter: boolean;
}

const FilterDropdown = ({
  handleFilter,
  selectedStatus,
  handleFilterToggle,
  showFilter,
}: FilterDropdownProps) => {
  return (
    <div>
      <div onClick={handleFilterToggle}>
        Filter by status
        <IconDown />
      </div>
      {showFilter && (
        <div>
          <div>
            <input
              type="checkbox"
              name="pending"
              id="pending"
              checked={selectedStatus === "pending"}
              onChange={() => handleFilter("pending")}
            />
            <label htmlFor="pending">Pending</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="draft"
              id="draft"
              checked={selectedStatus === "draft"}
              onChange={() => handleFilter("draft")}
            />
            <label htmlFor="draft">Draft</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="paid"
              id="paid"
              checked={selectedStatus === "paid"}
              onChange={() => handleFilter("paid")}
            />
            <label htmlFor="paid">Paid</label>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
