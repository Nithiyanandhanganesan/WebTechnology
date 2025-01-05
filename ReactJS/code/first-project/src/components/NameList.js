import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['nithiy','anand']
    const nameList = names.map(x => <h2>{x}</h2>)

    const persons = [
        {
            id:1,
            name:'nithiy'
        },
        {
            id:2,
            name:'anand'
        }
    ]

  const personList = persons.map(x => <Person key={x.id} personProps={x}/>)
  return (
    <div>
        <div>{nameList}</div>
        <div>{personList}</div>
    </div>
  )
}

export default NameList