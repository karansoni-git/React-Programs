import { createContext } from "react";
/* 
=>The useContext hook in React is a powerful tool that allows you to access data from a Context directly in a functional component, without having to pass props manually through every level of the component tree.

*What is Context in React?
=>Context is used to share global data (like themes, authentication status, language preferences, etc.) between components, without prop drilling (passing props down multiple levels).

*When to Use useContext
=>When you have data that needs to be accessible by many components (e.g., user info, dark/light theme, app settings).
=>When you want to avoid passing props manually through multiple component layers.

1. Prop Drilling: Context API addresses prop drilling.component composition is an alternative.
2. Folder Setup: Use a store folder for context files.
3. Initialization: Use React.createContext with initial state and export it.
4. Provider: Implement with contextName.Provider in components.
5. Access Value: Use the useContext hook.
6. Dynamic Data: Combine context value with state.
7. Export Functions: Context can also export functions for actions
8. Logic Separation: This helps keep the UI and business logic separate from each other.

*/
export const dataStoreContext = createContext([
  { data: [], addData: () => {} },
]);
