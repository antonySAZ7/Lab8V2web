import { describe, it, expect } from 'vitest'
import { calculatePasswordStrength } from '../utils/passwordStrength'

describe('calculatePasswordStrength', () => {
    it('returns vacía for empty password', () => {
        expect(calculatePasswordStrength('')).toBe('vacía')
    })

    it('returns débil for short passwords', () => {
        expect(calculatePasswordStrength('123')).toBe('débil')
    })

    it('returns media for passwords with 8+ letters only', () => {
        expect(calculatePasswordStrength('abcdefgh')).toBe('media')
    })

    it('returns fuerte for passwords with numbers', () => {
        expect(calculatePasswordStrength('abcd1234')).toBe('fuerte')
    })

    it('returns muy fuerte for passwords with numbers and symbols', () => {
        expect(calculatePasswordStrength('abcd1234!')).toBe('muy fuerte')
    })

    it('8 characters without numbers is not débil', () => {
        expect(calculatePasswordStrength('abcdefgh')).not.toBe('débil')
    })

    it('7 characters is not media', () => {
        expect(calculatePasswordStrength('abcdefg')).not.toBe('media')
    })

    it('symbols only under 8 chars are still débil', () => {
        expect(calculatePasswordStrength('!!!')).toBe('débil')
    })
})