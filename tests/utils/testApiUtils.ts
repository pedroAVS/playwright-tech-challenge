import FormData from 'form-data';
import { BASE_URL } from './helpers/Constants';
import { retrieveResponse } from './networkUtils';
import { range } from './helpers/Range';

export async function testApiValues(): Promise<string[]> {
  const results: string[] = [];
  const testRange = range();
  for (const num of testRange) {
    const formData = new FormData();
    formData.append('number', num.toString());
    try {
      const response = await retrieveResponse(`${BASE_URL}/factorial`, formData);
      results.push(response);
    } catch (error) {
      console.error(`Error occurred for number ${num}: `, error);
      throw error;
    }
  }
  return results;
}
