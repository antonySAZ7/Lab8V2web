import { JSDOM } from 'jsdom'

if (typeof document === 'undefined') {
    const dom = new JSDOM('<!doctype html><html><body></body></html>', {
        url: 'http://localhost/',
    })

    globalThis.window = dom.window
    globalThis.document = dom.window.document
    globalThis.navigator = dom.window.navigator
    globalThis.HTMLElement = dom.window.HTMLElement
    globalThis.HTMLInputElement = dom.window.HTMLInputElement
    globalThis.Node = dom.window.Node
    globalThis.Event = dom.window.Event
}

const { afterEach } = await import('vitest')
const { cleanup } = await import('@testing-library/react')
await import('@testing-library/jest-dom/vitest')

afterEach(() => {
    cleanup()
})
