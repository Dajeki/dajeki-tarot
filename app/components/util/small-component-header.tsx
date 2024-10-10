import React from 'react'

interface Prop {
	children?: React.ReactNode;
	className?: string;
}

export default function SmallComponentHeader({children, className}: Prop) {
  return (
	<div>small-component-header</div>
  )
}
