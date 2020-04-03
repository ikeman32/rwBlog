import { render, cleanup } from '@testing-library/react'

import LoginForm from './LoginForm'

describe('LoginForm', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<LoginForm />)
    }).not.toThrow()
  })
})
