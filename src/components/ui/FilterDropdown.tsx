import { useState } from "react";
import { ReactComponent as IconDown } from "../../assets/icon-arrow-down.svg";

const FilterDropdown = () => {
  const [showFilter, setShowFilter] = useState(false);

  const handleFilterToggle = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div>
      <div onClick={handleFilterToggle}>
        Filter by status
        <IconDown />
      </div>
      {showFilter && (
        <div>
          <div>
            <input type="checkbox" name="pending" id="pending" />
            <label htmlFor="pending">Pending</label>
          </div>
          <div>
            <input type="checkbox" name="draft" id="draft" />
            <label htmlFor="draft">Draft</label>
          </div>
          <div>
            <input type="checkbox" name="paid" id="paid" />
            <label htmlFor="paid">Paid</label>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
