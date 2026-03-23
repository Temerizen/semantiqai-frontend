export const API_BASE = "https://semantiqai-backend-production.up.railway.app"

export async function apiGet(path = "") {
  const response = await fetch(`${API_BASE}${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })

  const text = await response.text()

  try {
    const data = JSON.parse(text)
    if (!response.ok) {
      throw new Error(data.error || "GET request failed.")
    }
    return data
  } catch (err) {
    if (!response.ok) {
      throw new Error(text || "Backend returned invalid response.")
    }
    throw new Error("Backend returned non-JSON response.")
  }
}

export async function apiPost(path = "/", body = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })

  const text = await response.text()

  try {
    const data = JSON.parse(text)
    if (!response.ok) {
      throw new Error(data.error || "POST request failed.")
    }
    return data
  } catch (err) {
    if (!response.ok) {
      throw new Error(text || "Backend returned invalid response.")
    }
    throw new Error("Backend returned non-JSON response.")
  }
}
