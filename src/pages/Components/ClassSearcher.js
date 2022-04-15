import React from 'react'
import { Dropdown } from 'semantic-ui-react'



const MajorOptions = [
  { key: 'af', value: 'af', flag: 'af', text: 'Computer Engineering' },
  { key: 'ax', value: 'ax', flag: 'ax', text: 'Computer Science' },
  { key: 'al', value: 'al', flag: 'al', text: 'Accounting' },
  { key: 'al', value: 'al', flag: 'al', text: 'Electrical Engineering' },
  { key: 'al', value: 'al', flag: 'al', text: 'Political Science' },
  { key: 'al', value: 'al', flag: 'al', text: 'Industrial and System Engineering' },
  { key: 'al', value: 'al', flag: 'al', text: 'Civil Engineering' },
  { key: 'al', value: 'al', flag: 'al', text: 'Mechanical Engineering' },
  { key: 'al', value: 'al', flag: 'al', text: 'Aerospace Engineering' },

]

const ClassSearcher = () => (
  <Dropdown
    placeholder='Select Major'
    fluid
    search
    selection
    options={MajorOptions}
  />
)

export default ClassSearcher

