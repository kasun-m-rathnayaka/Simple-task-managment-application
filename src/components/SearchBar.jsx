const SearchBar = () => {
  return (
    <div className="flex mx-10">
      <input
        type="text"
        placeholder="Search"
        className="w-full p-2 border border-gray-300 "
      />
      <button className="bg-blue-500 text-white p-2 min-w-40 mr-10">Search</button>
      <select className="p-2 border border-gray-300 min-w-40">
        <option value="name">Name</option>
        <option value="age">Age</option>
        <option value="email">Email</option>
      </select>
      <select className="p-2 border border-gray-300 min-w-40">
        <option value="name">Name</option>
        <option value="age">Age</option>
        <option value="email">Email</option>
      </select>
    </div>
  );
};

export default SearchBar;
