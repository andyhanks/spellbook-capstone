import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
export const AddNewAlert = (props) => {
    //creates the variable user with initial state objects userName, email, password, isAdmin and familyId.
    const localhelpAppUser = localStorage.getItem("helpApp_user")
    const helpAppUserObject = JSON.parse(localhelpAppUser)
    //allows page to navigate elsewhere
    let navigate = useNavigate()
    const [alertTypes, setAlertTypes] = useState([])
    const [alert, setAlert] = useState({
        userId: helpAppUserObject.id,
        alertTypesId: 0,
        alertDateTime: "Fri Apr 29 2022 14:02:20 GMT-0500 (Central Daylight Time)",
        familyId: helpAppUserObject.familyId
    })
    useEffect(
        () => {
            fetch('http://localhost:8088/alertTypes')
                .then(response => response.json())
                .then((alertTypesArray) => {
                    setAlertTypes(alertTypesArray)
                })
        },
        []
    )
    //processes and posts the data to the database
    const addNewAlert = () => {
        return fetch("http://localhost:8088/alerts?_expand=users/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(alert)
        })
            .then(res => res.json())
    }
    const addAlertType = (event) => {
        const newAlertObject = {
            userId: helpAppUserObject.id,
            alertTypesId: +event.target.value,
            alertDateTime: new Date(),
            familyId: helpAppUserObject.familyId
        }
        setAlert(newAlertObject)
    }
    //function updates the user state as the user types in the form fields. It creates a copy of the current state - modidifies it with the new information inputed by the user and then sets the state with the updated copy.
    const updateAlert = (evt) => {
        const copy = { ...alert }
        copy[evt.target.id] = evt.target.value
        setAlert(copy)
    }
    //this is the render method of the component. It returns the JSX that represents the form with input fields for new alerts.
    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login">
                <h1 className="h3 mb-3 font-weight-normal">Add new alert page</h1>
                <fieldset>
                    <select onChange={addAlertType} name="alertTypes" id="alertTypes">
                    <option value="0">Select an alert</option>
                        {alertTypes.map(aType => {
                            return <option key={aType.id} value={aType.id}>{aType.alertText}</option>
                        })}
                    </select>
                </fieldset>
                <fieldset>
                    <button onClick={addNewAlert} type="submit"> Submit </button>
                </fieldset>
            </form>
        </main>
    )
}












