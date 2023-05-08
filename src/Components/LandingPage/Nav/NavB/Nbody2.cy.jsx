import React from 'react'
import Nbody2 from './Nbody2'

describe('<Nbody2 />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Nbody2 />)
  })
})