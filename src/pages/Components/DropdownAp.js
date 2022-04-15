

import React from 'react'
import { Dropdown } from 'semantic-ui-react'



const ApClasses = [
  { key: 'al', value: 'al',  text: 'AP US Government' },
  { key: 'al', value: 'al',  text: 'AP Physics' },
  { key: 'al', value: 'al',  text: 'AP Chem' },
  { key: 'al', value: 'al',  text: 'AP US History' },
  { key: 'al', value: 'al',  text: 'AP Psychology' },
  { key: 'al', value: 'al',  text: 'AP Calculus' },


]

const DropdownAp = () => (
  <Dropdown
    placeholder='AP Classes'
    multiple
    search
    selection
    options={ApClasses}
  />
)

export default DropdownAp