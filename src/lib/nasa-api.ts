/**
 * NASA API Integration
 * Documentation: https://api.nasa.gov/
 * DONKI API: https://api.nasa.gov/DONKI/
 */

const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY || 'DEMO_KEY'
const DONKI_BASE_URL = 'https://api.nasa.gov/DONKI'

export interface DonkiEvent {
  activityID?: string
  startTime?: string
  endTime?: string
  // Add more fields based on specific event types
}

/**
 * Fetch Coronal Mass Ejection (CME) events
 */
export async function fetchCMEEvents(
  startDate?: string,
  endDate?: string
): Promise<DonkiEvent[]> {
  const params = new URLSearchParams({
    api_key: NASA_API_KEY,
  })
  
  if (startDate) params.append('startDate', startDate)
  if (endDate) params.append('endDate', endDate)
  
  const response = await fetch(`${DONKI_BASE_URL}/CME?${params}`)
  return response.json()
}

/**
 * Fetch Geomagnetic Storm (GST) events
 */
export async function fetchGSTEvents(
  startDate?: string,
  endDate?: string
): Promise<DonkiEvent[]> {
  const params = new URLSearchParams({
    api_key: NASA_API_KEY,
  })
  
  if (startDate) params.append('startDate', startDate)
  if (endDate) params.append('endDate', endDate)
  
  const response = await fetch(`${DONKI_BASE_URL}/GST?${params}`)
  return response.json()
}

/**
 * Fetch Solar Flare (FLR) events
 */
export async function fetchFLREvents(
  startDate?: string,
  endDate?: string
): Promise<DonkiEvent[]> {
  const params = new URLSearchParams({
    api_key: NASA_API_KEY,
  })
  
  if (startDate) params.append('startDate', startDate)
  if (endDate) params.append('endDate', endDate)
  
  const response = await fetch(`${DONKI_BASE_URL}/FLR?${params}`)
  return response.json()
}
