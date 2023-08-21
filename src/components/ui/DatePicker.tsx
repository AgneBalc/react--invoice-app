import { FormikProps } from "formik";
import { ReactComponent as IconCalendar } from "../../assets/icon-calendar.svg";
import { ReactComponent as IconArrowLeft } from "../../assets/icon-arrow-left.svg";
import { ReactComponent as IconArrowRight } from "../../assets/icon-arrow-right.svg";
import { Invoice } from "../../types";
import { useEffect, useState } from "react";
import { format, getDaysInMonth, getYear } from "date-fns";

interface DatePickerProps {
  formik: FormikProps<Invoice>;
}

const DatePicker = ({ formik }: DatePickerProps) => {
  const initialDate = new Date(formik.values.createdAt);
  const initialMonth = new Date(initialDate).getMonth();
  const initialYear = getYear(initialDate);
  const initialDaysInMonth = getDaysInMonth(initialDate);

  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [selectedMonth, setSelectedMonth] = useState(initialMonth);
  const [selectedYear, setSelectedYear] = useState(initialYear);
  const [daysInMonthTotal, setDaysInMonthTotal] = useState(initialDaysInMonth);

  useEffect(() => {
    setDaysInMonthTotal(getDaysInMonth(new Date(selectedYear, selectedMonth)));
  }, [selectedMonth]);

  const handlePrevMonth = () => {
    setSelectedMonth((curr) => {
      if (curr - 1 < 0) {
        setSelectedYear((prev) => prev - 1);
        return 11;
      } else {
        return curr - 1;
      }
    });
  };

  const handleNextMonth = () => {
    setSelectedMonth((curr) => {
      if (curr + 1 > 11) {
        setSelectedYear((prev) => prev + 1);
        return 0;
      } else {
        return curr + 1;
      }
    });
  };

  const handleDateSelect = (selectedDay: number) => {
    const newDate = new Date(selectedYear, selectedMonth, selectedDay);
    setSelectedDate(newDate);
    formik.setFieldValue("createdAt", format(new Date(newDate), "yyyy-MM-dd"));
  };

  const daysInMonth = Array.from(Array(daysInMonthTotal).keys(), (x) => x + 1);

  return (
    <div>
      <label htmlFor="createdAt">Invoice Date</label>
      <div>
        <input
          type="text"
          id="createdAt"
          readOnly
          {...formik.getFieldProps("createdAt")}
        />
        <IconCalendar />
      </div>
      <div>
        <div>
          <button type="button" onClick={handlePrevMonth}>
            <IconArrowLeft />
          </button>
          <p>{format(new Date(selectedYear, selectedMonth), "MMM yyyy")}</p>
          <button type="button" onClick={handleNextMonth}>
            <IconArrowRight />
          </button>
        </div>
        <div>
          {daysInMonth.map((day, index) => (
            <p key={index} onClick={() => handleDateSelect(day)}>
              {day}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
