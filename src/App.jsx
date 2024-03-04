import React from "react";
import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register";

function App() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      {/* <LoginPage></LoginPage> */}
      <RegisterPage />
    </div>
  );
}

export default App;
