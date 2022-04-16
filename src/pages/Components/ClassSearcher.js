import React from 'react'
import { Dropdown } from 'semantic-ui-react'



const MajorOptions = [
  { key: 'af', value: 'af', flag: 'us', text: 'Computer Engineering' },
  { key: 'ax', value: 'ax', flag: 'us', text: 'Computer Science' },
  { key: 'al', value: 'al', flag: 'us', text: 'Accounting' },
  { key: 'al', value: 'al', flag: 'us', text: 'Electrical Engineering' },
  { key: 'al', value: 'al', flag: 'us', text: 'Political Science' },
  { key: 'al', value: 'al', flag: 'us', text: 'Industrial and System Engineering' },
  { key: 'al', value: 'al', flag: 'us', text: 'Civil Engineering' },
  { key: 'al', value: 'al', flag: 'us', text: 'Mechanical Engineering' },
  { key: 'al', value: 'al', flag: 'us', text: 'Aerospace Engineering' },

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

