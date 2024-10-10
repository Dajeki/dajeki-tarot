import React from 'react'

interface Prop {
	children?: React.ReactNode;
	className?: string;
}

export default function SmallHeader({children, className}: Prop) {
  return (
	  <h3 className={"font-serif align-middle " + className ?? ""}>{children}</h3>
  )
}
