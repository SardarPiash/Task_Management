import Search from "./search"
import TaskAction from "./taskaction"
import Tasklist from "./tasklist"
import { useState } from "react"

const objectTaskList={
	"id":crypto.randomUUID(),
	"title":"Efficient Web API Connectivity in Python",
	"description":"Develop a Python-based solution for connecting an API to a third-party database securely, focusing on efficient data handling and exchange.",
	"tags":["Java","C++","Python"],
	"priority":"High",
	"isFavourite":false
}
export default function TaskBoard(){
const [tasks,setTask]=useState([objectTaskList]);
    return(
        <section className="mb-20" id="tasks">
		
		<div className="container">
		<div className="p-2 flex justify-end">
			<form>
				<div className="flex">
					<Search />
				</div>
			</form>
		</div>
			<div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
				<TaskAction />
				<div className="overflow-auto">
					<Tasklist tasks={tasks}/>
				</div>
			</div>
		</div>
	</section>
    )
}