import React from 'react'

function Accommodation(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={50}
      height={50}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0_3384_3035)" fill="#807DFF">
        <path d="M28.903 29.32h-8.167v14.292h8.167V29.321z" />
        <path d="M42.011 21.521L26.271 5.433a2.042 2.042 0 00-2.9 0L7.63 21.542a4.083 4.083 0 00-1.184 2.92V41.57a4.083 4.083 0 003.858 4.083h6.35V27.279a2.042 2.042 0 012.041-2.042h12.25a2.042 2.042 0 012.042 2.042v18.375h6.35a4.083 4.083 0 003.858-4.084V24.462a4.226 4.226 0 00-1.184-2.94z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_3384_3035">
          <path fill="#fff" transform="translate(.32 .737)" d="M0 0h49v49H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Accommodation
