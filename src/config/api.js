export const API_BASE = "https://semantiqai-backend-production.up.railway.app"

export async function sendPrompt(prompt) {
  const response = await fetch(`${API_BASE}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt })
  })

  const text = await response.text()

  try {
    const data = JSON.parse(text)
    if (!response.ok) {
      throw new Error(data.error || "Request failed.")
    }
    return data
  } catch (err) {
    if (!response.ok) {
      throw new Error(text || "Backend returned invalid response.")
    }
    throw new Error("Backend returned non-JSON response.")
  }
}
