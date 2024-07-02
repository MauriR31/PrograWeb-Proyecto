const SVGComponent = (props) => (
  <svg
    className="w-12 h-12 text-gray-500"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4a4 4 0 110 8 4 4 0 010-8zm0 10c-4.418 0-8 1.791-8 4v1h16v-1c0-2.209-3.582-4-8-4z" />
  </svg>
);
export default SVGComponent;
