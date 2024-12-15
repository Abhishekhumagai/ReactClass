import "./App.css";
import { AppSidebar } from "./components/appsidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import Home from "./Pages/Home";

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <div>
          <Home />
        </div>
        <SidebarTrigger />
      </main>
    </SidebarProvider>
  );
}

export default App;
