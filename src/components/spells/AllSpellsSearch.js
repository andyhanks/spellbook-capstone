export const AllSpellsSearch =({setterFunction}) => {
    return (
        <div>
        <input
        onChange={
            (changeEvent) => {
                setterFunction(changeEvent.target.value)
            }
        }
        type= "text" placeholder="Enter Search Terms"/>
        </div>
    )
}