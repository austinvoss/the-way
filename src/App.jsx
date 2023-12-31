export default function App() {
  return (
    <div className="grid grid-cols-12 gap-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="col-span-1 bg-neutral-100 h-12 text-center py-3"
        >
          {index + 1}
        </div>
      ))}
      <h1 className="text-center text-6xl col-span-12">The Way</h1>
    </div>
  );
}
