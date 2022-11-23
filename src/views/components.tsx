// simple page that centers a component

import Card from "../components/Cards/Card";

function Components() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Components</h1>
      <div className="flex h-4/5 w-full flex-col items-center justify-center bg-gray-200">
        {/* here */}
        <Card />
      </div>
    </div>
  );
}

export default Components;
