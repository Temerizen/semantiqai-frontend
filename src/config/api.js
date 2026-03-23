const API_BASE = import.meta.env.VITE_API_BASE || 'http://127.0.0.1:5000'

async function request(path, method = 'GET', body = null, founderKey = null) {
  const headers = {
    'Content-Type': 'application/json'
  }

  if (founderKey) {
    headers['x-founder-key'] = founderKey
  }

  const res = await fetch(API_BASE + path, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null
  })

  const data = await res.json()

  if (!data.ok) {
    return data
  }

  return data
}

export function apiGet(path) {
  return request(path, 'GET')
}

export function apiPost(path, body) {
  return request(path, 'POST', body)
}

export function founderPost(path, body, key) {
  return request(path, 'POST', body, key)
}
