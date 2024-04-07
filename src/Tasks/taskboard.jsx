import Search from "./search";
import TaskAction from "./taskaction";
import Tasklist from "./tasklist";
import { useState } from "react";
import Addtask from "./addtask";


export default function TaskBoard() {
  const [tasks, setTask] = useState([]);
  const [showAddTaskMoral, setShowAddTaskMoral] = useState(false);
  const [editableInfo,setEditableInfo]=useState(null);

  //////////////Open add task moral......................
  function handleOpenForm() {
    ///console.log("Add task clicked");
    setShowAddTaskMoral(true);
  }


function handleEditForm(task) {
	setEditableInfo(task);
   /// console.log("Edit task clicked",task);
    setShowAddTaskMoral(true);
  }


  /////////////////add task added to the state to show in the list ............
  function submitTask(task, isAdd) {
	console.log(isAdd);
	if(isAdd){
		setTask([...tasks, task]);
	}else{
		setTask(
			tasks.map((t)=>{
				if(t.id===task.id){
                  return task;
				}
				return tasks;
			})
		)
		setEditableInfo(null);
	}
    
    console.log(task);
    setShowAddTaskMoral(false);
  }

  return (
    <section className="mb-20" id="tasks">
      {showAddTaskMoral && <Addtask saveTask={submitTask} editableInfo={editableInfo}/>}
      <div className="container">
        <div className="p-2 flex justify-end">
          <form>
            <div className="flex">
              <Search />
            </div>
          </form>
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction addTask={handleOpenForm} />
          <div className="overflow-auto h-full w-full">
            <Tasklist tasks={tasks} onEdit={handleEditForm}/>
          </div>
        </div>
      </div>
    </section>
  );
}
