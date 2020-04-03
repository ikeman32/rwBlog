import { render, cleanup } from '@testing-library/react'

import RegisterPage from './RegisterPage'

describe('RegisterPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<RegisterPage />)
    }).not.toThrow()
  })
})
