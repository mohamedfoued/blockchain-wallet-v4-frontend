import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CopyToClipBoard from 'react-copy-to-clipboard'

import { IconButton } from 'blockchain-info-components'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`
const AddressBox = styled.span`
  display: block;
  width: 100%;
  height: 36px;
  font-size: 12px;
  font-weight: 400;
  line-height: 36px;
  padding-left: 10px;
  align-items: center;
  white-space: nowrap;
  overflow: scroll;
  padding-right: 10px;
  color: ${props => props.theme['gray-5']};
  border: 1px solid ${props => props.theme['gray-2']};
  border-right: none;
  border-radius: 4px 0 0 4px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: ${props => props.theme['gray-1']};
`
const CopyButton = styled(IconButton)`
  width: 50px;
  min-width: 0;
  height: 38px;
  border-radius: 0 4px 4px 0;
  > span {
    margin-top: ${props => (props.active ? '-2px' : '-4px;')};
    margin-right: 0 !important;
    font-size: ${props => (props.active ? '18px' : '22px')};
    color: ${props =>
      props.active ? props.theme['success'] : props.theme['gray-5']};
  }
`

const CopyClipboard = props => {
  const { active, address, handleClick } = props

  return (
    <Wrapper>
      <AddressBox data-e2e='copyClipboardAddress'>{address}</AddressBox>
      <CopyToClipBoard text={address} onCopy={handleClick}>
        <CopyButton
          active={active}
          name={active ? 'check' : 'copy-clipboard'}
          color='gray-1'
          data-e2e='copyClipboardCopyButton'
        />
      </CopyToClipBoard>
    </Wrapper>
  )
}

CopyClipboard.propTypes = {
  active: PropTypes.bool.isRequired,
  address: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default CopyClipboard
