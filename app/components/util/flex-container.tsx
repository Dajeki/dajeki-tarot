import React from 'react'

interface Prop {
	children?: React.ReactNode;
	className?: string;
	center?: boolean;
}

export function Flex({ children, className, center }: Prop) {
	return (
		<div className={`w-full flex ${center ? "items-center justify-center" : ""} ` + (className ?? "")}>
		  {children}
	  </div>
  )
}

export function FlexColumn({children, className, center} : Prop) {
	return (
		<div className={`w-full flex flex-col ${center ? "items-center justify-center" : ""} ` + (className ?? "")}>
			{children}
		</div>
	)
  }