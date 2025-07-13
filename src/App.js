import React, { useState, useEffect, useMemo } from 'react';

function App() {
    
    const [tarefas, setTarefas] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const tarefasStorage = localStorage.getItem(tarefas);

        if (tarefasStorage) {
            setTarefas(JSON.parse(tarefasStorage));
        }
        return () => {}
    }, []);
    
    useEffect(() => {
        localStorage.setItem('tarefas', JSON.stringify(tarefas))
    }, [tarefas]);

    function handleAdd() {
        setTarefas([...tarefas, input]);
        setInput(''); 
    }

    const totalTarefas = useMemo(() => tarefas.length, [tarefas]);
    
    return(
        <div>
            <h1>Hooks</h1>
            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa}>{tarefa}</li>
                ))}
            </ul>
            <br/>
            <strong>Tarefas : {totalTarefas}</strong>
            <br/><br/>
            <input type='text' value={input} onChange={ e => setInput(e.target.value) } />
            <button type='button' onClick={handleAdd}>Adicionar</button>
        </div>
    );
}

export default App;