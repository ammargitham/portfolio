export default function Material3({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      {...props}
    >
      <title>Material 3 Design</title>
      <g clipPath="url(#a)">
        <path d="M20 .5C30.77.5 39.5 9.23 39.5 20S30.77 39.5 20 39.5.5 30.77.5 20 9.23.5 20 .5Z" />
        <path d="M33.5 6.5v27h-27v-27h27Z" />
        <mask id="b" fill="#fff">
          <path
            fillRule="evenodd"
            d="M33.928 6.07 20 33.928 6.07 6.07"
            clipRule="evenodd"
          />
        </mask>
        <path
          fill="#000"
          d="m20 33.928-.895.447.895 1.788.894-1.788-.894-.447ZM33.034 5.623 19.105 33.48l1.79.895L34.822 6.518l-1.789-.895ZM20.894 33.48 6.966 5.623l-1.79.895 13.93 27.857 1.788-.895Z"
          mask="url(#b)"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h40v40H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
