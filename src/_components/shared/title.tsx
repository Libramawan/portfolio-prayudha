export default function Title({ text, spanText, altColor = false }: TitleText) {
  return (
    <h2
      className={`${
        !altColor ? "text-gray-700 " : "text-gray-200"
      } dark:text-gray-300`}
    >
      {text}{" "}
      <span
        className={`${
          !altColor ? "text-blue-custom" : "text-gray-200"
        } dark:text-indigo-300`}
      >
        {spanText}
      </span>
    </h2>
  );
}
