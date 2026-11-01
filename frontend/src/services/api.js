const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1";

async function apiRequest(endpoint, options = {}) {
  const { timeout = 8000, headers, ...fetchOptions } = options;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...(headers || {}),
      },
      ...fetchOptions,
      signal: controller.signal,
    });

    const contentType = response.headers.get("content-type") || "";
    const payload = contentType.includes("application/json")
      ? await response.json()
      : await response.text();

    if (!response.ok) {
      const message =
        typeof payload === "string"
          ? payload
          : payload.message || "Request failed.";
      throw new Error(message);
    }

    return payload;
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("Request timed out.");
    }
    throw error;
  } finally {
    clearTimeout(timer);
  }
}

export default apiRequest;
