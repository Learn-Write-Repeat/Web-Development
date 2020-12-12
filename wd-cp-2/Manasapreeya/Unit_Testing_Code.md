## How can we do Unit Testing 

#### This is a small code example to explain how unit testing is done:
1. ##### We will test a component whose only purpose is to render a paragraph with some text.
```
import React from 'react'

const Paragraph = ({ children }) => (
  <p>{ children }</p>
)

export default Paragraph
```
2. ##### The only thing we want to test here is that the children passed to this component are rendered inside a <p> tag.
```
/* Dependencies */
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

/* Components */
import Paragraph from './'

// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() })

describe('Paragraph', () => {
  it('should render children inside a p tag', () => {
    const wrapper = shallow(<Paragraph>This is my first test</Paragraph>)
    const paragraph = wrapper.find('p')
    expect(paragraph).toHaveLength(1)
    expect(paragraph.text()).toEqual('This is my first test')
  })
})
```
3. ##### We can test this by running `npm test` It looks for all test files and tests them. 
