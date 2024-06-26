import React from 'react'
import { cn } from 'ui'

interface Props {
  className?: string
}

const GALogo = ({ className }: Props) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 146 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M9.90872 39.7865C9.90872 23.108 23.4293 9.58743 40.1078 9.58743C49.7794 9.58743 58.3878 14.1286 63.9227 21.2142L71.3958 15.3765C64.1412 6.0894 52.8222 0.104492 40.1078 0.104492C18.192 0.104492 0.425781 17.8707 0.425781 39.7865C0.425781 61.7023 18.192 79.4685 40.1078 79.4685C44.6069 79.4685 48.9307 78.72 52.9616 77.3408V67.121C49.0611 68.9584 44.7039 69.9856 40.1078 69.9856C23.4293 69.9856 9.90872 56.465 9.90872 39.7865Z"
        fill="#EDEDED"
      />
      <path
        d="M62.4117 47.9878H62.4446L62.3638 77.9288L71.6541 77.9286L71.7349 38.0012L38.6667 38.0011L38.6667 47.4841L62.4117 47.4841L62.4117 47.9878Z"
        fill="#EDEDED"
      />
      <path
        d="M103.571 14.5169L81.2178 58.7897V37.9204L99.3558 1.83807L107.825 1.85127L145.5 77.8259H135.221L103.571 14.5169Z"
        fill="#EDEDED"
      />
      <path d="M98.6779 68.3335H108.182V77.8377H98.6779V68.3335Z" fill="#EDEDED" />
    </svg>
  )
}

export default GALogo
