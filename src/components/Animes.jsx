import { useState, useEffect } from "react";

function Animes() {
    const [animes, setAnimes] =  useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect (()=> {
        fetch("https://api.jikan.moe/v4/top/anime")
        .then((respuesta) => respuesta.json())
        .then((data) => {
            setAnimes(data.data);
            setCargando(false);
        })
        .catch((error) => console.error("Error al obtener animes: ", error));
    }, []);

    return (
        <div className="anime-container">
            <h2>Top animes</h2>
            {cargando ? (
                <p>cargando...</p>
            ) : (
                <ul className="anime-list">
                    {animes.map((anime) => (
                        <li key={anime.mal_id} className="anime-card">
                            <img src={anime.images.jpg.image_url} alt={anime.title} width="100" />
                            <p>{anime.title}</p>
                            <p>⭐ {anime.score}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
export default Animes;