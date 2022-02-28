import React, { useState } from "react";
import { getMonth } from "./util";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";

import "./App.css";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  return (
    <>
      <div className="h-screen flex flex-columns">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
}

export default App;
