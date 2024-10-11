"use client";

import Advocates from "./components/Advocates";
import SearchInput from "./components/SearchInput";

export default function Home() {
  return (
    <main className="flex-col gap-md margin-md">
      <div className="header">
        <h1>Solace Advocates</h1>
      </div>
      <div className="search-container">
        <SearchInput />
      </div>
      <div>
        <Advocates/>
      </div>
    </main>
  );
}
