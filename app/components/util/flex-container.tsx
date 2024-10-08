import React from 'react'

interface Prop {
	children?: React.ReactNode;
	className?: string;
}

export function Flex({children, className} : Prop) {
  return (
	  <div className={"w-full flex " + (className ?? "")}>
		  {children}
	  </div>
  )
}

export function FlexColumn({children, className} : Prop) {
	return (
		<div className={"w-full flex flex-col " + (className ?? "")}>
			{children}
		</div>
	)
  }