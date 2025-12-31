import React from "react";
import Card from "./Card";

const DynamicCarrusel = ({ items, category }) => {
  const chunkArray = (arr, size) =>
    arr.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(arr.slice(i, i + size));
      return acc;
    }, []);

  const groupedItems = chunkArray(items, 3);

  return (
    <div className="container my-5">
      <h2 className="mb-3 text-capitalize">{category}</h2>
      <div
        id={`carrusel-${category}`}
        className="carrusel slide"
        data-bs-ride="carrusel"
      >
        <div className="carrusel-inner">
          {groupedItems.map((group, index) => (
            <div
              className={`carrusel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                {group.map((item, idx) => (
                  <Card
                    key={idx}
                    info={item.properties}
                    id={item.uid}
                    category={category}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          className="carrusel-control-prev"
          type="button"
          data-bs-target={`#carrusel-${category}`}
          data-bs-slide="prev"
        >
          <span
            className="carrusel-control-prev-icon"
            aria-hidden="true"
            style={{ filter: "invert(1)" }} // esto invierte el color a negro
          />
          <span className="visually-hidden">Anterior</span>
        </button>

        <button
          className="carusel-control-next"
          type="button"
          data-bs-target={`#carrusel-${category}`}
          data-bs-slide="next"
        >
          <span
            className="carrusel-control-next-icon"
            aria-hidden="true"
            style={{ filter: "invert(1)" }}
          />
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  );
};

export default DynamicCarrusel;