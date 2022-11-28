

function Card ({nombre,edad,imgUrl}) {
    return (
        <div className="Card">
            <h2>{nombre}</h2>
            <img src={imgUrl} 
            alt="fotoperfil" 
            width={"100px"}
            />
            <p>foto perfil</p>
            <p>{edad}</p>
            <button>Tarjeta Personal</button>
            
            
        </div>
    );
}

export default Card;

