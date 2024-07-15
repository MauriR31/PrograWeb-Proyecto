import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Minicalendario = ({
  startDate,
  endDate,
  handleDateChange,
  closeCalendar,
}) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-extrabold">Fecha de Inicio</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => handleDateChange(date, "start")}
            className="cursor-pointer font-bold text-blue-500 underline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-extrabold">Fecha de Fin</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => handleDateChange(date, "end")}
            className="cursor-pointer font-bold text-blue-500 underline"
          />
        </div>
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={closeCalendar}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Minicalendario;
