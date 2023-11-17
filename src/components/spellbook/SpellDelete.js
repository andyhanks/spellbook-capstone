import { getSpellDelete } from "./SpellBookFunctions";





export const SpellDeleteButton = ({ spellId, onDelete }) => {
    
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