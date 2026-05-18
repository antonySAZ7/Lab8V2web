import { describe, it, expect } from 'vitest'
import { calculatePasswordStrength } from '../utils/passwordStrength'

describe('calculatePasswordStrength', () => {
    it('returns vacía for empty password', () => {
        expect(calculatePasswordStrength('')).toBe('vacía')
    })
})