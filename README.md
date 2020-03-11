# Render Class Based Components

- Create a new directory inside of `src` called components. This is where we will put all of our featured components from now on for a better organized project.

- Inside of the `components` directory create a new file called `Greetings.jsx`
    - the JSX file extension will provide better intellisense. JSX is a flavor of JS but making that distinction is your file creation will make coding a little simpler/faster with the help of your IDE.

- `Greetings.jsx` will be a class based component. The component should render the text `Welcome` on the page when referenced.

- Render the `Greetings` component on the page by importing and referencing it in `App.js`

- Create another file called `Classroom.jsx` in the same `components` directory.

- `Classroom.jsx` will also be a class based component. This component should render the text `List of all students`.

- Render the `Classroom` component by importing and referencing it in `App.js`.

- Create a third and final file called `Students.jsx` in the same `components` directory.

- `Student.jsx` will be a class based component. This component will render a student name that is passed as a the property `studentName` when the component is referenced.

- Create an array of student names in the `Classroom` component. Iterate through the array using `map`. On each iteration render the `Student` component passing in the current element as the property `studentName`
