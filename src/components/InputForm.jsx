const InputForm = () => {
  return (
    <>
      <div className="m-10 p-10 border border-gray-300">
        <div>Input Form</div>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label className="mt-5">Name</label>
            <input type="text" className="p-2 border border-gray-300" />
          </div>
          <div className="flex flex-col">
            <label className="mt-5">Assigned To</label>
            <select className="p-2 border border-gray-300">
              <option value="kasun">Kasun</option>
              <option value="saman">Saman</option>
              <option value="nimal">Nimal</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mt-5">Date</label>
            <input type="date" className="p-2 border border-gray-300" />
          </div>
          <div className="flex flex-col">
            <label className="mt-5">Assigned To</label>
            <select className="p-2 border border-gray-300">
              <option value="kasun">Kasun</option>
              <option value="saman">Saman</option>
              <option value="nimal">Nimal</option>
            </select>
          </div>
          <div className="flex flex-col">
              <button className="bg-blue-500 text-white p-2 mt-5">
                Add Task
              </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputForm;
