/* @vitest-environment jsdom */

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import PasswordStrengthMeter from '../components/PasswordStrengthMeter'

describe('PasswordStrengthMeter', () => {
    it('renders password input', () => {
        render(<PasswordStrengthMeter />)

        expect(
            screen.getByLabelText(/password/i)
        ).toBeInTheDocument()
    })

    it('shows vacía initially', () => {
        render(<PasswordStrengthMeter />)

        expect(
            screen.getByText('vacía')
        ).toBeInTheDocument()
    })

    it('shows débil when typing short password', async () => {
        const user = userEvent.setup()

        render(<PasswordStrengthMeter />)

        const input = screen.getByLabelText(/password/i)

        await user.type(input, '123')

        expect(
            screen.getByText('débil')
        ).toBeInTheDocument()
    })

    it('shows media for letters only', async () => {
        const user = userEvent.setup()

        render(<PasswordStrengthMeter />)

        const input = screen.getByLabelText(/password/i)

        await user.type(input, 'abcdefgh')

        expect(
            screen.getByText('media')
        ).toBeInTheDocument()
    })

    it('shows fuerte for passwords with numbers', async () => {
        const user = userEvent.setup()

        render(<PasswordStrengthMeter />)

        const input = screen.getByLabelText(/password/i)

        await user.type(input, 'abcd1234')

        expect(
            screen.getByText('fuerte')
        ).toBeInTheDocument()
    })

    it('shows muy fuerte for passwords with numbers and symbols', async () => {
        const user = userEvent.setup()

        render(<PasswordStrengthMeter />)

        const input = screen.getByLabelText(/password/i)

        await user.type(input, 'abcd1234!')

        expect(
            screen.getByText('muy fuerte')
        ).toBeInTheDocument()
    })

    it('returns to vacía when password is cleared', async () => {
        const user = userEvent.setup()

        render(<PasswordStrengthMeter />)

        const input = screen.getByLabelText(/password/i)

        await user.type(input, 'abcd1234!')

        await user.clear(input)

        expect(
            screen.getByText('vacía')
        ).toBeInTheDocument()
    })
})