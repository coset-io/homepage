import { SVGProps } from "react"

const RightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g stroke="#222" strokeWidth={1.73} clipPath="url(#a)">
      <path d="M.28 9.66h17.546" />
      <path
        strokeLinecap="square"
        d="m12.813 14.674 5.013-5.014M12.813 4.647l5.013 5.014"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.28 3.425h18.77v12.472H.28z" />
      </clipPath>
    </defs>
  </svg>
)
export default RightArrow
