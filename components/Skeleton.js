export default function Skeleton(el) {
  return (
    <div className="skeleton w-full">
      <div className="bg-gray-100 h-44 w-full"></div>
      <ul className="my-8 grid gap-4">
        <li className="bg-gray-100 p-2 rounded w-full"></li>
        <li className="bg-gray-100 p-2 rounded w-full"></li>
        <li className="bg-gray-100 p-2 rounded w-4/5"></li>
        <li className="bg-gray-100 p-2 rounded w-full"></li>
        <li className="bg-gray-100 p-2 rounded w-4/5"></li>
        <li className="bg-gray-100 p-2 rounded w-full"></li>
        <li className="bg-gray-100 p-2 rounded w-4/5"></li>
      </ul>
    </div>
  );
}
