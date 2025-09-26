import * as React from "react"
import { cn } from "@/lib/utils"

export interface LogoIconProps extends React.SVGProps<SVGSVGElement> {
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

const sizeClasses = {
  sm: "w-6 h-6",
  md: "w-8 h-8", 
  lg: "w-12 h-12",
  xl: "w-16 h-16"
}

const LogoIcon = React.forwardRef<SVGSVGElement, LogoIconProps>(
  ({ size = "md", className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width="355"
        height="308"
        viewBox="0 0 355 308"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(sizeClasses[size], className)}
        {...props}
      >
        <path
          d="M105.866 205.657C123.61 211.803 133.011 231.17 126.865 248.913L114.479 284.673C108.333 302.416 88.9669 311.818 71.2236 305.672L64.3076 303.276L98.9502 203.262L105.866 205.657ZM98.6221 98.2891L98.7773 98.1318L269.14 265.454C278.523 274.67 278.659 289.748 269.443 299.132C262.202 306.505 250.354 306.611 242.981 299.37L83.6992 142.932L32.5264 292.312C31.629 294.931 28.7748 296.322 26.1592 295.416L22.1982 294.043C5.53337 288.267 -3.31675 270.096 2.41113 253.415L66.4004 67.0596L98.6221 98.2891ZM85.957 8.92676C93.1984 1.55397 105.046 1.44717 112.419 8.68848L271.7 165.128L322.874 15.7471C323.771 13.1282 326.625 11.737 329.241 12.6436L333.202 14.0156C349.867 19.7912 358.717 37.9624 352.989 54.6436L289 241L256.777 209.77L256.623 209.928L86.2598 42.6055C76.8762 33.3892 76.7408 18.3104 85.957 8.92676ZM240.922 23.3867C247.068 5.64336 266.433 -3.75822 284.177 2.3877L291.093 4.7832L256.449 104.798L249.533 102.402C231.79 96.2562 222.389 76.8898 228.535 59.1465L240.922 23.3867Z"
          fill="url(#paint0_linear_38_65)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_38_65"
            x1="51.6772"
            y1="21.3498"
            x2="303.813"
            y2="269.869"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#15102B" />
            <stop offset="1" stopColor="#43357D" />
          </linearGradient>
        </defs>
      </svg>
    )
  }
)

LogoIcon.displayName = "LogoIcon"

export { LogoIcon }
