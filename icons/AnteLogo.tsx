import { FC, SVGAttributes } from "react";

const AnteLogo: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x=".5" y=".5" width="23" height="23" rx="3.5" stroke="#FE7B1F" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.875 6.554a.98.98 0 0 0-1.766 0l-4.995 9.939c-.345.686.136 1.507.883 1.507h10.006c.748 0 1.229-.822.883-1.508l-5.011-9.938ZM12 9.753a.76.76 0 0 0-.747.773v2.564a.76.76 0 0 0 .747.773.76.76 0 0 0 .746-.773v-2.564A.76.76 0 0 0 12 9.753Zm0 6.444a.76.76 0 0 0 .746-.773.76.76 0 0 0-.746-.774.76.76 0 0 0-.747.774.76.76 0 0 0 .747.773Z"
        fill="#FE7B1F"
      />
    </svg>
  );
};

export { AnteLogo };
