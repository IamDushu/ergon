import { useId } from 'react'
import clsx from 'clsx'
import ergonilogo from '@/images/ergonilogo.svg'

export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()

  return (
    <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 1000"
    {...props}
  >
    <defs>
      <style>
        {".cls-1{fill:#008a47;}.cls-2{fill:#232c65;}.cls-3{fill:#0a79be;}"}
      </style>
    </defs>
    <path
      className="cls-1"
      d="M348.46,329.62h0A170.75,170.75,0,0,1,519.21,158.87H847.87A170.75,170.75,0,0,1,677.12,329.62Z"
    />
    <path
      className="cls-2"
      d="M348.46,822.24h0A170.75,170.75,0,0,1,519.21,651.49H847.87A170.75,170.75,0,0,1,677.12,822.24Z"
    />
    <path
      className="cls-3"
      d="M251,583.35H102.52A170.75,170.75,0,0,1,273.26,412.6h440A170.75,170.75,0,0,1,542.5,583.35Z"
    />
  </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <div className='flex gap-2 items-center max-sm:hidden'>
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
    </svg>

    <h2 className='text-[18px] m-0 text-neutral-950 font-bold font-sans'>ERGON I TECH</h2>

    </div>



  )
}
