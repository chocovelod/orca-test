import { FC, SVGAttributes } from "react";

const LuctusLogo: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x=".5" y=".5" width="23" height="23" rx="3.5" stroke="#E2005E" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.746 18a1.01 1.01 0 0 1-.977-.745l-1.735-6.47a.998.998 0 0 1 .392-1.075l5.008-3.525c.35-.247.82-.247 1.17 0l4.97 3.497a.997.997 0 0 1 .373 1.136l-2.199 6.499a1.01 1.01 0 0 1-.958.683H8.746Zm3.32-9.005a.744.744 0 0 0-.747.741v2.962c0 .41.334.74.747.74a.744.744 0 0 0 .747-.74V9.736a.744.744 0 0 0-.747-.74Zm0 6.665a.744.744 0 0 0 .747-.74.744.744 0 0 0-.747-.74.744.744 0 0 0-.747.74c0 .409.334.74.747.74Z"
        fill="#E2005E"
      />
    </svg>
  );
};

export { LuctusLogo };
