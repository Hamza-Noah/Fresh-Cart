import { RouterProvider } from "react-router-dom";
import AuthContextProvider from "./Contexts/AuthContext";
import router from "./routing/routes";

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthContextProvider>
  );
}

export default App;
