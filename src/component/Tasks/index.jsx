import React, { useState } from "react";
import { useCollection } from "../../config/meteor/useCollection";
import { useMethod } from "../../config/meteor/useMethod";
import { useSubscribe } from "../../config/meteor/useSubscribe";
import { createUEID } from "../../utils/createUEID";
import Spinner from "../common/Spinner";

const Tasks = () => {
    const [inputValue, setValue] = useState("")
    const ready = useSubscribe('tasks');
    const tasks = useCollection('tasks');
    const call = useMethod();

    const submitFunction = async () => {
        await call('insertTask', { text: inputValue, id: createUEID() });
    };

    const deleteTask = ({ id }) => {
        call("removeTask", { id })
    }

    if (!ready) return <Spinner />

    if (!tasks || tasks.length <= 0) return null;

    return (
        <div>
            {
                tasks.map((task, index) => {
                    return (
                        <div key={index}>
                            {task.text}
                            <button onClick={() => deleteTask({ id: task.id })}>
                                DELETE TASK
                            </button>
                        </div>
                    )
                })
            }
            <div style={{ marginTop: '20px' }}>
                <input
                    value={inputValue}
                    onChange={e => setValue(e.target.value)}
                />
                <button
                    disabled={!inputValue}
                    onClick={submitFunction}
                >
                    ADD TASK
                </button>
            </div>
        </div>
    )
};

export default Tasks;