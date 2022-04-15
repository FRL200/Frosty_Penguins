

import React from 'react'
import { Dropdown } from 'semantic-ui-react'



const IbClasses = [
  { key: 'al', value: 'al',  text: 'IB Chem' },
  { key: 'al', value: 'al',  text: 'IB English' },
  { key: 'al', value: 'al',  text: 'IB History' },
  { key: 'al', value: 'al',  text: 'IB Spanish' },
  { key: 'al', value: 'al',  text: 'IB French' },
  { key: 'al', value: 'al',  text: 'Ib Psychology' },


]

const DropdownIb = () => (
  <Dropdown
    placeholder='Ib Classes'
    fluid
    multiple
    search
    selection
    options={IbClasses}
  />
)

export default DropdownIb