interface ComponentBreakpointStyles {
	[name: string]: string;
}

export default function generateStyles(componentStyles: ComponentBreakpointStyles) : string {
	let style = "";

	for (const breakpoint in componentStyles) {
		style += componentStyles[breakpoint] + " ";
	}
	return style;
}