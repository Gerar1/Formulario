import React, { useEffect, useState } from 'react'

function Formulario ({setUsuarios, usuarios}) {
    const [name, setName] = useState("");
    const [age, setage] = useState(0);
    const [imgUrl,setImgUrl] = useState("");
    const [error, setError] = useState("");

    useEffect(()=>{
        if (name.length < 3){
            setError("nombre debe tener mas de 3 caracteres");
        } else {
            setError("");
        }
    },[name]);
    useEffect(()=>{
        if (age < 0){
            setError("edad minima es 0");
        } else {
            setError("");
        }
    },[age]);
    useEffect(()=>{
        if (!imgUrl.startsWith("https//")){
            setError("url incorrecta");
        } else {
            setError("");
        }
    },[imgUrl]);

    
    
    return (
        <form>
            <h3 id="form-title"> Formulario</h3>
            <label>
                Nombre:
                <input type="text" value={name}
                required 
                onChange={(event) => {
                setName(event.target.value);
                }}>
                </input>
            </label>
            <label>
                Edad:
                <input type="number"
                value={age}
                required
                onChange={(event) => {
                setage(event.target.value);
                }}>
                </input>
            </label>
            <label>
                profile image URL:
                <input
                type="text"
                value={imgUrl}
                required
                onChange={(event) => {
                setImgUrl(event.target.value);
                }}>
                </input>
            </label>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button 
            disabled={error !== "" ? true : false} 
            className="submit"
            >

               enviar
            </button>
            
        </form>
    );
}


export default Formulario;
