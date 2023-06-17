import axios from 'axios';
import { Page } from '@playwright/test';

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

export async function interceptResponseValue(page: Page, endpoint: string): Promise<any> {
  const response = await page.waitForResponse(endpoint);
  const responseBody = await response.json();
  const responseValue = responseBody.answer;
  return responseValue;
}