import s from "./SearchBox.module.css";
const SearchBox = ({ filter, handleChangeFilter }) => {
  return (
    <label>
      <span>Find contacts by name</span>
      <br></br>
      <input
        className={s.input}
        type="text"
        placeholder="Search"
        value={filter}
        onChange={handleChangeFilter}
      />
    </label>
  );
};

export default SearchBox;
