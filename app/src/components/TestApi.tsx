import React, { useState } from 'react';

interface TestApiProps {
}

export const TestApi: React.FC<TestApiProps> = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const getDataFromApi = async (e: any) => {
        e.preventDefault();

        const data = await fetch(`/api/hello?name=${name}`);
        const json = await data.json();

        if (json.message) {
            setMessage(json.message);
        }
    };

    return (
        <>
            <form id="form1" className="App-form" onSubmit={e => getDataFromApi(e)}>
                <div>
                    <input
                        type="text"
                        id="name"
                        className="App-input"
                        placeholder="Name"
                        value={name}
                        onChange={e => setName(e.target.value)} />
                    <button type="submit" className="App-button">Submit</button>
                </div>
            </form>
            <div><h5>Message: {message} </h5></div>
        </>
    );
};
