import { it, expect } from 'vitest'

import { sum } from './main'

it('should be able to sum two numbers', () => {
  expect(sum(1, 2)).toBe(3)
})