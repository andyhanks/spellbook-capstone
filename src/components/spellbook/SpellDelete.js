export const getSpellDelete = (spellId) => {
    return fetch(`http://localhost:8088/spellBooks/${spellId}`, {
        method: "DELETE"
    })}





export const SpellDeleteButton = ({ spellId, onDelete }) => {
    console.log(spellId)
    const pageReload = () => {
        window.location.reload();
    }
    
    const handleDelete = () => {
        getSpellDelete(spellId)
        .then(pageReload())
    };

    return (
        <button onClick={handleDelete} className="delete-btn"> Delete </button>
    );
};