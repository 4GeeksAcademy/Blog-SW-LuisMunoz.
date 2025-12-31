const URL_BASE = "https://www.swapi.tech/api/";

async function getVehicles() {
  try {
    const response = await fetch(`${URL_BASE}vehicles/`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    throw error;
  }
}

async function getVehicleById(id) {
  try {
    const response = await fetch(`${URL_BASE}vehicles/${id}`);
    if (!response.ok) {
      if (response.status === 429) {
        console.warn(`Rate limit hit for vehicle ID ${id}. Waiting 1s before retrying...`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        return getVehicleById(id); 
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    }
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Error fetching vehicle by ID:", error);
    throw error;
  }
}

export { getVehicles, getVehicleById };