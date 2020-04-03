import { render, cleanup } from '@testing-library/react'

import RegisterForm from './RegisterForm'

describe('RegisterForm', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<RegisterForm />)
    }).not.toThrow()
  })
})
