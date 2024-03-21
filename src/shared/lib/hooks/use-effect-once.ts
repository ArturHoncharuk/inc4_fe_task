import { useEffect } from 'react';
import type { EffectCallback } from 'react';

/**
 * A hook that runs an effect only once (at mount).
 * @param {EffectCallback} effect - The effect to run.
 * @see [Documentation](https://usehooks-ts.com/react-hook/use-effect-once)
 * @example
 * useEffectOnce(() => {
 *   console.log('Hello World');
 * });
 */
export function useEffectOnce(effect: EffectCallback) {
  useEffect(effect, []);
}