What problem does the context API help solve?

Prop Drilling

In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Store--- Holds state for the app, known as the single source of truth because it holds the current state
Reducer- determines state in the app
action-- what we dispacth to modify state

What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and often acted upon by different componenets. Component state is held by just the one component even if it is acted upon by other components. Application state is good when the state is needed by many layers under it (think 5 or 6 layers down the chain) or in a sideways component or even if the applications is very large. Component state is good in smaller applications and for state that isn't needed far down the chains or is only needed inside that particular component.

Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

It simplifies handling asynch operations inside action creators. it allows us to dispatch actions created with thunk inside asynch functions.

What is your favorite state management system you've learned and this sprint? Please explain why!

Easily Context API for it's simplicity.
