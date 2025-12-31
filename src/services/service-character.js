const URL_BASE = "https://www.swapi.tech/api/";

async function getCharacter() {
  try {
    const response = await fetch(`${URL_BASE}people/`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching character:", error);
    throw error;
  }
}

async function getCharacterById(id) {
  try {
    const response = await fetch(`${URL_BASE}people/${id}`);
    if (!response.ok) {
      if (response.status === 429) {

        console.warn(`Rate limit hit for ID ${id}. Waiting 1s before retrying...`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        return getCharacterById(id); 
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    }
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Error fetching person by ID:", error);
    throw error;
  }
}

export { getCharacter, getCharacterById };