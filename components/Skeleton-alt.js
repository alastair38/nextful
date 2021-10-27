export default function SkeletonAlt() {
  return (
    <div className="skeleton w-1/2">
      <div className="bg-red-400 h-44 w-full flex items-center justify-center text-3xl">
        Hero
      </div>
      <ul className="my-8 grid gap-4">
        <li className="bg-red-400 p-2 rounded w-full"></li>
        <li className="bg-red-400 p-2 rounded w-full"></li>
        <li className="bg-red-400 p-2 rounded w-4/5"></li>
        <li className="bg-red-400 p-2 rounded w-full"></li>
        <li className="bg-red-400 p-2 rounded w-4/5"></li>
        <li className="bg-red-400 p-2 rounded w-full"></li>
        <li className="bg-red-400 p-2 rounded w-4/5"></li>
      </ul>
    </div>
  );
}
