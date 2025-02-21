const TaskCard = () => {
  return (
    <>
      <div className="flex justify-between p-4 border min-h-20 mx-10 mt-5 bg-slate-100">
        <div>Task 1</div>
        <div>Assigned To: Kasun</div>
        <div>Due Date: 01/01/2022</div>
        <div>Priority: High</div>
        <img src="delete.png" alt="delete icon" className="w-10 h-10 cursor-pointer"/>
      </div>
      <div className="flex justify-between p-4 border min-h-20 mx-10 mt-5 bg-red-100">
        <div>Task 1</div>
        <div>Assigned To: Kasun</div>
        <div>Due Date: 01/01/2022</div>
        <div>Priority: High</div>
        <img src="delete.png" alt="delete icon" className="w-10 h-10 cursor-pointer"/>
      </div>
    </>
  );
};

export default TaskCard;
