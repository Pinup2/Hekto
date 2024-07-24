
const PageSizeSelector = ({ pageSize, setPageSize }) => {
  const options = [10, 20, 50, 100];

  const handleChange = (event) => {
    setPageSize(Number(event.target.value));
  };

  return (
    <div className="page-size-selector">
      <label htmlFor="page-size">Per Page: </label>
      <select id="page-size" value={pageSize} onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PageSizeSelector;
