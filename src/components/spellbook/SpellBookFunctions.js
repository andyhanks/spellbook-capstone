export const getSpellDelete = (spellId) => {
    return fetch(`http://localhost:8088/spellBooks?_expand=user&_expand=spell${spellId}`, {
        method: "DELETE"
    })}

    export const getSpell = (taskData) => {
        return fetch(`http://localhost:8088/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskData)
        }).then(response => response.json());
    };