import { AuthProvider } from "./context/authContext";
import MainLayout from "./layout/MainLayout";
function App() {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
}

export default App;
