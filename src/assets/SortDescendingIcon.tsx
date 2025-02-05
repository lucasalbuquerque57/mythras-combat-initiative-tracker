export default function SortDescendingIcon({
  darkMode,
}: {
  darkMode: boolean;
}): JSX.Element {
  return (
    // This svg is licensed under the Zest Free License which can be found in attributions.md
    <svg
      width="36px"
      height="36px"
      viewBox="1 1 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.00002 5C7.00002 4.44772 6.5523 4 6.00002 4C5.44773 4 5.00002 4.44772 5.00002 5V16.5858L3.7071 15.2929C3.31658 14.9024 2.68341 14.9024 2.29289 15.2929C1.90237 15.6834 1.90237 16.3166 2.2929 16.7071L5.29291 19.7071C5.48045 19.8946 5.73481 20 6.00002 20C6.26524 20 6.51959 19.8946 6.70713 19.7071L9.70711 16.7071C10.0976 16.3166 10.0976 15.6834 9.7071 15.2929C9.31658 14.9024 8.68341 14.9024 8.29289 15.2929L7.00002 16.5858V5ZM13 6C12.4477 6 12 6.44772 12 7C12 7.55228 12.4477 8 13 8H21C21.5523 8 22 7.55228 22 7C22 6.44772 21.5523 6 21 6H13ZM13 11C12.4477 11 12 11.4477 12 12C12 12.5523 12.4477 13 13 13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13ZM13 16C12.4477 16 12 16.4477 12 17C12 17.5523 12.4477 18 13 18H14C14.5523 18 15 17.5523 15 17C15 16.4477 14.5523 16 14 16H13Z"
        fill={darkMode ? "rgb(255, 255, 255)" : "rgba(0, 0, 0, 0.58)"}
      />
    </svg>
  );
}
