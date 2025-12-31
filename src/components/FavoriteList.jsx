import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const FavoriteList = () => {
  const { store, actions } = useGlobalReducer();

  return (
    <nav className="navbar">
      <div className="container d-flex align-items-center">
        <Link to="/" className="navbar-brand ps-3 pt-4">
          <img
            src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"
            alt="Star Wars Logo"
            className="img-fluid"
            style={{ width: "90px", height: "auto" }}
          />
        </Link>

        <div className="dropdown me-3">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="favoritesDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favoritos{" "}
            <span className="badge bg-light text-dark ms-1">
              {store.favoriteList.length}
            </span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="favoritesDropdown">
            {store.favoriteList.length > 0 ? (
              store.favoriteList.map((fav, index) => (
                <li
                  key={index}
                  className="dropdown-item d-flex justify-content-between align-items-center"
                >
                  {/* Ajuste de ruta: añadimos una barra / al inicio */}
                  <Link to={`/${fav.resource}/${fav.uid || fav.id}`}>
                    {fav.name}
                  </Link>
                  <button
                    className="btn btn-sm btn-outline-danger ms-2"
                    title="Remove"
                    onClick={(e) => {
                      e.stopPropagation(); // Evita que el menú se cierre al borrar
                      actions.removeFavorite(fav);
                    }}
                  >
                    🗑️
                  </button>
                </li>
              ))
            ) : (
              <li className="dropdown-item text-center">No favorites added</li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default FavoriteList;