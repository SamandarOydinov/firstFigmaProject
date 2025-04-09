import React, { useEffect, useState } from "react";

function Todo() {
    /**
     * 1. Bo'sh title bilan qo'sha olmasligi kerak
     * 2. Reverse button reversed bo'lganini bildirishi kerak
     * 3. Complete qila olishi kerak
     * 4. Edit qila olishi kerak
     * 5. Delete qila olishi kerak
     * 6. Dizayn norm bo'lishi kerak
     */
    const [tasks, setTasks] = useState([]);
    const [reversed, setReversed] = useState(false);
    const [title, setTitle] = useState("");

    const handleAdd = () => {
        setTasks([...tasks, {
            id: Date.now(), title,
        }]);

        setTitle("");
    };

    useEffect(() => {
        let a = setInterval(() => {
            console.log("I am here!");
        }, 1000);

        return () => {
            clearInterval(a);
        }
    }, []);

    useEffect(() => {
        setTasks([...tasks].reverse())
    }, [reversed]);

    return (
        <div className="max-w-[640px] px-[20px] mx-auto my-[50px]">
            <h1 className="text-5xl mb-3 text-center">Tasks</h1>
            <div className="flex justify-center gap-3 p-4 m-4">
                <input className="p-1 border rounded shadow"
                    type="text"
                    value={title}
                    onKeyDown={(e) => {
                        if(e.keyCode === 13) handleAdd()
                    }}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title of task"
                />
                <button className="bg-slate-400 border px-5 rounded text-white shadow" onClick={handleAdd}>Add</button>
            </div>
            <button className="bg-slate-400 border px-5 rounded text-white shadow" onClick={() => setReversed(!reversed)}>{reversed ? "Reversed" : "Reverse"}</button>

            <div className="flex gap-3 flex-col">
                {tasks.length === 0 ? "No tasks" : null}
                {tasks.map(task => {
                    return (
                        <div className="border rounded shadow p-2" key={task.id}>
                            <p>{task.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Todo;