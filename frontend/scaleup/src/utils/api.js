const BASE_URL = import.meta.env.VITE_BASE_URL || "";

if (!BASE_URL) {
  console.warn(
    "[api] VITE_BASE_URL is not set. " +
    "Copy .env.example to .env and fill in the API base URL."
  );
}

class ApiError extends Error {
  constructor(message, status, body = null) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.body = body;
  }
}

async function post(path, data) {
  if (!BASE_URL) {
    throw new ApiError("API base URL is not configured.", 0);
  }

  const url = `${BASE_URL}${path}`;
  let res;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch {
    // fetch itself threw — network is unreachable
    throw new ApiError("Network error", 0);
  }

  if (!res.ok) {
    const text = await res.text();
    let parsed = null;
    try {
      parsed = JSON.parse(text);
    } catch {
      parsed = text;
    }
    console.error(`[api] POST ${url} → ${res.status}`, parsed);
    const message = (parsed && (parsed.error || parsed.message)) ? (parsed.error || parsed.message) : `Request failed: ${res.status}`;
    throw new ApiError(message, res.status, parsed);
  }

  // Try to parse JSON, fall back to raw text
  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

export { BASE_URL, ApiError, post };
