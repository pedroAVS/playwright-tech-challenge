import axios from 'axios';
import { Page } from '@playwright/test';

// Retrieves a response from the specified URL by sending a POST request with the provided data.
export async function retrieveResponse(url: string, data: any): Promise<string> {
  try {
    const response = await axios.post(url, data);
    const responseData = response.data;
    const responseValue = responseData.answer
    return responseValue
  } catch (error) {
    throw new Error(`Error sending POST request: ${error}`);
  }
}

// Intercepts the response value from a specific network endpoint in a web page.
export async function interceptResponseValue(page: Page, endpoint: string): Promise<any> {
  const response = await page.waitForResponse(endpoint);
  const responseBody = await response.json();
  const responseValue = responseBody.answer;
  return responseValue;
}