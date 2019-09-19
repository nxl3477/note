import * as React from 'react'

interface HellpProps {
  name:string,
  age: number;
}

export default class Hello extends React.Component<HellpProps> {
  
  render() {
    return (
      <div>
        Hello world React-ts
      </div>
    )
  }
}
