import { useState } from "react"

const profes = ["Sofia", "Yolanda", "Pepito", "Ines"]

const Profesores = () => {
    let [name, newName] = useState("Sofia")

    const profesorList = profes.map((profesor)=><li onClick={()=>newName(profesor)}>{profesor}</li>)
    return (
        <div><h2>Teacher Name {name}</h2>
        <ul>{profesorList}</ul>
        </div>
    )
}

export default Profesores