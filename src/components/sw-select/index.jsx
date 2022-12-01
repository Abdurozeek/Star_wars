export const Select = ({ tab, handleChangeTab }) => {
  return (
    <select placeholder="Choose your path"
      className="select-item"
      value={tab}
      onChange={handleChangeTab}
    >
      <option>Heroes</option>
      <option>Villains</option>
    </select>
  );
};
