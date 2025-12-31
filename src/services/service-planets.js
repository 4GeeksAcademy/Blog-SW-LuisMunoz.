const URL_BASE = "https://www.swapi.tech/api/";

async function getPlanets() {
  try {
    const response = await fetch(`${URL_BASE}planets/`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching planets:", error);
    throw error;
  }
}

async function getPlanetById(id) {
  try {
    const response = await fetch(`${URL_BASE}planets/${id}`);
    if (!response.ok) {
      if (response.status === 429) {
        console.warn(`Rate limit hit for planet ID ${id}. Waiting 1s before retrying...`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        return getPlanetById(id); 
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    }
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Error fetching planet by ID:", error);
    throw error;
  }
}

export { getPlanets, getPlanetById };