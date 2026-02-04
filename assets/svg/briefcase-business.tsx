import React from "react";
import { cn } from "@/lib/utils";

export function BriefcaseBusiness({
  className,
  ...props
}: React.HTMLAttributes<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn("block h-auto w-full", className)}
      viewBox="0 0 16 17"
      fill="none"
    >
      <path
        d="M5.33289 15.508H10.6662C13.3462 15.508 13.8262 14.4346 13.9662 13.128L14.4662 7.79464C14.6462 6.16798 14.1796 4.84131 11.3329 4.84131H4.66623C1.81956 4.84131 1.35289 6.16798 1.53289 7.79464L2.03289 13.128C2.17289 14.4346 2.65289 15.508 5.33289 15.508Z"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.33301 4.84123V4.30789C5.33301 3.12789 5.33301 2.17456 7.46634 2.17456H8.53301C10.6663 2.17456 10.6663 3.12789 10.6663 4.30789V4.84123"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.33366 9.50798V10.1746C9.33366 10.1813 9.33366 10.1813 9.33366 10.188C9.33366 10.9146 9.32699 11.508 8.00033 11.508C6.68033 11.508 6.66699 10.9213 6.66699 10.1946V9.50798C6.66699 8.84131 6.66699 8.84131 7.33366 8.84131H8.66699C9.33366 8.84131 9.33366 8.84131 9.33366 9.50798Z"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.433 8.17456C12.893 9.29456 11.133 9.96123 9.33301 10.1879"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.74707 8.35474C3.24707 9.3814 4.9404 10.0014 6.66707 10.1947"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
