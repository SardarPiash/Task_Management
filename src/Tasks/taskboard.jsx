import Search from "./search";
import TaskAction from "./taskaction";
import Tasklist from "./tasklist";
import { useState } from "react";
import Addtask from "./addtask";


////////////////////dammy data for the 1st time testing...........................
// const objectTaskList={
// 	"id":crypto.randomUUID(),
// 	"title":"Efficient Web API Connectivity in Python",
// 	"description":"Develop a Python-based solution for connecting an API to a third-party database securely, focusing on efficient data handling and exchange.",
// 	"tags":["Java","C++","Python"],
// 	"priority":"High",
// 	"isFavourite":false
// }
export default function TaskBoard() {
	/////////////integrated dammy data for the 1st time.....................
  // const [tasks,setTask]=useState([objectTaskList]);
  const [tasks, setTask] = useState([]);
  const [showAddTaskMoral, setShowAddTaskMoral] = useState(false);
  const [editableInfo,setEditableInfo]=useState("");

  //////////////Open add task moral......................
  function handleOpenForm() {
    console.log("Add task clicked");
    setShowAddTaskMoral(true);
  }
  //////////////Edit add task moral......................
//   function handleEditForm(task) {
// 	function newww(){
// 		console.log(editableInfo);
// 	}
// 	setEditableInfo(task);
// 	newww();
//     console.log("Edit task clicked",task);
//     setShowAddTaskMoral(true);
//   }

  /////////////////add task added to the state to show in the list ............
  function submitTask(task) {
    setTask([...tasks, task]);
    console.log(task);
    setShowAddTaskMoral(false);
  }

  return (
    <section className="mb-20" id="tasks">
      {showAddTaskMoral && <Addtask saveTask={submitTask} />}
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
            <Tasklist tasks={tasks} />
          </div>
        </div>
      </div>
    </section>
  );
}
