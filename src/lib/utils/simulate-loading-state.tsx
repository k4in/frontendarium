import { delay } from '@/lib/utils/delay';
import { type SetStateAction, type Dispatch } from 'react';

export async function simulateLoading(fn: Dispatch<SetStateAction<boolean>>, ms: number = 1000) {
  fn(true);
  await delay(ms);
  fn(false);
}
