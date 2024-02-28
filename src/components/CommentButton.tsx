interface CommentButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export default function CommentButton({ ...props }: CommentButtonProps) {
  return (
    <button
      className="transition-all duration-700 w-6 h-6 rounded-tl-none rounded-full border-2 !border-white bg-gray-500 hover:bg-blue-500"
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        aria-hidden="true"
        className="w-4 h-4 translate-x-[.1rem] stroke-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </button>
  );
}
