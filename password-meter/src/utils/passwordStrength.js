it('returns débil for short passwords', () => {
    expect(calculatePasswordStrength('123')).toBe('débil')
})