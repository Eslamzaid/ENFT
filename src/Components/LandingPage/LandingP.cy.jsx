import React from 'react'
import LandingP from './LandingP'

describe('<LandingP />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LandingP />)
  })
})