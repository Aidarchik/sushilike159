import React from 'react';
import Blog from './components/blog';

const App = () => {
  return (
    <div>
      <section className="text-gray-600  body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex- m-4">
            <Blog />
            <Blog />
            <Blog />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;