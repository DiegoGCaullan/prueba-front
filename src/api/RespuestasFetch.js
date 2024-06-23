export const RespuestasFetch = async (formData) => {
  try {
    const url = "http://localhost:3844/api/v1/respuestas";

    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    if (response.status !== 200) throw result;
    return result;
  } catch (error) {
    throw error;
  }
};
