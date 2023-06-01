import React from 'react'

function Heart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={41}
      height={41}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0_3384_3102)">
        <g clipPath="url(#prefix__clip1_3384_3102)">
          <path
            d="M20.82 36.968a1.757 1.757 0 01-1.273-.532L5.627 22.173A9.76 9.76 0 012.9 15.389c0-2.54.98-4.978 2.726-6.783a9.281 9.281 0 016.63-2.804 9.281 9.281 0 016.628 2.804l1.936 1.98 1.934-1.98a9.28 9.28 0 016.63-2.804 9.281 9.281 0 016.629 2.804 9.76 9.76 0 012.726 6.783 9.76 9.76 0 01-2.726 6.784L22.092 36.436a1.757 1.757 0 01-1.272.532z"
            fill="#E497FF"
          />
        </g>
      </g>
      <defs>
        <clipPath id="prefix__clip0_3384_3102">
          <path
            fill="#fff"
            transform="translate(.943 .56)"
            d="M0 0h39.92v39.92H0z"
          />
        </clipPath>
        <clipPath id="prefix__clip1_3384_3102">
          <path
            fill="#fff"
            transform="translate(-.68 -1.532)"
            d="M0 0h43v44H0z"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Heart
