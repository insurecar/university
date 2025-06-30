const URL = "https://eu-poznan-api.onrender.com/api";

export const login = async (login, password) => {
  const response = await fetch(`${URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: login, password: password }),
  });

  if (!response.ok) {
    let error;
    try {
      const data = await response.json();
      error = data.message || JSON.stringify(data);
    } catch {
      error = await response.text();
    }
    throw new Error(`Login failed: ${error}`);
  }

  return response.json();
};
