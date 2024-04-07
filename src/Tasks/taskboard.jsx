import Search from "./search";
import TaskAction from "./taskaction";
import Tasklist from "./tasklist";
import { useState } from "react";
import Addtask from "./addtask";

export default function TaskBoard() {
  const [tasks, setTask] = useState([]);
  const [showAddTaskMoral, setShowAddTaskMoral] = useState(false);
  const [editableInfo, setEditableInfo] = useState(null);

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
    if (isAdd) {
      setTask([...tasks, task]);
    } else {
      setTask(
        tasks.map((t) => {
          if (t.id === task.id) {
            return task;
          }
          return tasks;
        })
      );
      setEditableInfo(null);
    }

    console.log(task);
    setShowAddTaskMoral(false);
  }

  ///close button function on add-edit task moral......
  function handleOnClose() {
    setShowAddTaskMoral(false);
    setEditableInfo(null);
  }

  ////delete single task..........
  function handleSingleDelete(taskId) {
    const singleDeleteTask = tasks.filter((task) => task.id != taskId);
    setTask(singleDeleteTask);
  }

  ////delete all task button.....
  function handleDeleteAll() {
    tasks.length = 0;
    setTask([...tasks]);
    console.log("delete all");
  }

  ///isFavourite touggle is done.........
  function handleFavourite(taskId) {
    const index = tasks.findIndex(task => task.id === taskId);

	const newArray = [...tasks];

	newArray[index].isFavorite= !newArray[index].isFavorite;

	setTask(newArray);
  }

  function handleSearch(text){
    const searchTask = tasks.filter(task=>{
      return task.title.toLowerCase().includes(text.toLowerCase());
    })
    setTask(searchTask);
  }

  return (
    <section className="mb-20" id="tasks">
      {showAddTaskMoral && (
        <Addtask
          onClose={handleOnClose}
          saveTask={submitTask}
          editableInfo={editableInfo}
        />
      )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <form>
            <div className="flex">
              <Search onSerach={handleSearch}/>
            </div>
          </form>
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction deleteAll={handleDeleteAll} addTask={handleOpenForm} />
          <div className="overflow-auto h-full w-full">
            <Tasklist
              isFavorite={handleFavourite}
              onSingleDelete={handleSingleDelete}
              tasks={tasks}
              onEdit={handleEditForm}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
