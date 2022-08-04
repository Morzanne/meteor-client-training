import React, { useState } from "react";
import { useCollection } from "../../config/meteor/useCollection";
import { useMethod } from "../../config/meteor/useMethod";
import { useSubscribe } from "../../config/meteor/useSubscribe";
import { createUEID } from "../../utils/createUEID";
import Spinner from "../common/Spinner";

const Tests = () => {
    const [inputValue, setValue] = useState("")
    const ready = useSubscribe('tests');
    const tests = useCollection('tests');
    const call = useMethod();

    const submitFunction = async () => {
        await call('insertTest', { essai: inputValue, id: createUEID() });
    };

    const deleteTask = ({ id }) => {
        call("removeTest", { id })
    }

    if (!ready) return <Spinner />

    if (!tests || tests.length <= 0) return (
        <div>
            <input
                value={inputValue}
                onChange={e => setValue(e.target.value)}
            />
            <button
                disabled={!inputValue}
                onClick={submitFunction}
            >
                ADD ESSAI
            </button>
        </div>
    );

    return (
        <div>
            {
                tests.map((test, index) => {
                    return (
                        <div key={index}>
                            {test.essai}
                            <button onClick={() => deleteTask({ id: test.id })}>
                                DELETE ESSAI
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
                    ADD ESSAI
                </button>
            </div>
        </div>
    )
};

export default Tests;