import React from "react";
import SingleQuestion from "./SingleQuestion";

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>iQuestionery</h2>
          <div className="underline"></div>
        </div>
        <SingleQuestion />
      </section>
      <footer>
        <h4>Created By WK</h4>
      </footer>
    </main>
  );
}

export default App;
