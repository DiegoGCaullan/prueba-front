export const getMeFetch = async (token) => {
  try {
    const url = "http://localhost:3844/api/v1/user/me";
    const params = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(url, params);
    const result = await response.json();

    if (response.status !== 200) throw response;

    return result;
  } catch (error) {
    throw error;
  }
};
