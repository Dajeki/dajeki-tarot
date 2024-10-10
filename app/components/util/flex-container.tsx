import React from 'react'

interface Prop {
	children?: React.ReactNode;
	className?: string;
}
export default function Flex({children, className} : Prop) {
  return (
	  <div className={"w-full flex " + (className ?? "")}>
		  {children}
	  </div>
  )
}
