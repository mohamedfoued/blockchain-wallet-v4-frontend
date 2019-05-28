import React from 'react'
import styled from 'styled-components'
import { reduxForm } from 'redux-form'

import UnusedAddresses from './UnusedAddresses'
import UsedAddresses from './UsedAddresses'
import { model } from 'data'
const { WALLET_TX_SEARCH } = model.form

const Wrapper = styled.section`
  box-sizing: border-box;
`
class ManageAddressesContainer extends React.PureComponent {
  render () {
    const routeParams = this.props.match.params
    return (
      <Wrapper>
        <UnusedAddresses
          derivation={routeParams.derivation}
          walletIndex={routeParams.walletIndex}
        />
        <UsedAddresses
          derivation={routeParams.derivation}
          walletIndex={routeParams.walletIndex}
        />
      </Wrapper>
    )
  }
}

export default reduxForm({
  form: WALLET_TX_SEARCH
})(ManageAddressesContainer)
