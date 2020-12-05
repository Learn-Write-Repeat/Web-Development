# ReactJS Components Inner Communication.

<p align="center">
<img src="https://miro.medium.com/max/2000/1*k-06JYgpyNdd9ApmOANTzw.jpeg" width="500px"  ></p>

## There are a total of 3 cases of communication between components:

1. **Case 1: Parent to Child communication**
   - **Using Props:**
   - Props provide one-way communication from a parent to a child. Any changes in the values of an attribute/argument in the prop will directly reflect in the child.
   - **Using the Instance method:**
   - Child instance can be created in Parent by using ref. In the above example we have created a reference for child component and saved in foo.
Using the reference of the child component, we can call any method of child from the parent.



2. **Case 2: Child to Parent communication**
   -Data from a child can be passed to the parent using a callback. This can be achieved by using the following steps.
   - 1. Create a callback method in parent and pass it to the child using props.
   - 2. Child can call this method using “this.props.[yourCallbackName]” form child and pass data as argument.
   
   
   
3. **Case 3: Communication between Sibling / Any components**
   - React support one-way data flow. In order to send data from sibling 1 to sibling 2, you have to send data to parent and then from parent to sibling 2. This approach is a little complicated and difficult to maintain.
   
   
   
   
   
- Reference:https://medium.com/@sumeet.ru/component-communication-in-react-without-redux-5006b7a6009d
