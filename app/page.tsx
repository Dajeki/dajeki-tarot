import Image from "next/image";
import MoonPhase from "./components/moon_phase/moon-phase";
import SpreadSelector from "./components/spread_selector/spread-selector";

export default function Home() {
	return (
		<>
			<MoonPhase className="h-1/5 w-2/6 min-h-[120px]" />
			<SpreadSelector />
			<div>hello</div>
		</>

	)
}
