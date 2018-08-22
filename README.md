Here are some notes regarding this quick build and burn 


- Redux is a predictable state container for JavaScript apps.
- The createStore factory function from Redux is used to create a Redux STORE
- The Reducer is the only mandatory argument passed into createStore()
- A REDUCER is just a function. A function that takes in two parameters. The first being the STATE of the app, and the other being an ACTION
- A Reducer always returns the NEW STATE of your application.
- The INITIAL STATE of your application, initialState is the second
argument passed into the createStore function call.
- Store.getState() will return the current state of your application. Where Store is a valid Redux STORE.
