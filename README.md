# What is JSX, and why is it used?
JSX is basically a mix of JavaScript and HTML, letting us writing familiar looking markup directly inside JavaScript files. We use it because it makes our code cleaner and easier to read when building UIs. Instead of writing HTML in one file and logic in another, JSX bundles them together.Morover, The browser doesn't run JSX directly rather a tool called Babel translates it into standard JavaScript .

# What is the difference between State and Props?
We can think of props as how a parent component gives a child component its marching orders. We cannot change the child . on the other hand, is the component's own personal memory. It's internal data that the component can change over time, like what number a counter should show. When state updates the React automatically re-renders that component. 

# What is the useState hook, and how does it work?
The useState hook is how we add state to functional components. When we call useState(), it gives us back two things: the current state value and a function to update it. React then remembers this state value between component renders. When we call the updater function, React knows to re-render  components to show the new data. 
# How can you share state between components in React?
To share state, we need to move the state from the individual components to their closest common parent. That parent then holds the state and passes it down to the children as props. This ensuring  that all components relying on that state are perfectly synchronized. 
# How is event handling done in React?
Event handling in React is pretty similar to regular HTML.Here when event names are in camelCase (like onClick), and we pass a function as the handler directly within JSX file.We need to call event.preventDefault() if we want to stop a default browser action, for an example a form refreshing the page.