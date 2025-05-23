import "./styles/index.scss";
import { classNames } from "shared/lib/ClassNames/classNames";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/ThemeProvider";

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
