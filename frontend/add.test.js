import { describe, it, expect } from 'vitest'
import { add } from './script.js'

describe('Addition Test', () => {
  it('should add numbers correctly', () => {
    expect(add(2, 3)).toBe(5)
  })
})