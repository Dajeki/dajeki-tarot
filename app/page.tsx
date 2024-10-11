import Image from "next/image";
import MoonPhase from "./components/moon_phase/moon-phase";
import SpreadSelector from "./components/spread_selector/spread-selector";

export default function Home() {
	return (
		<>
			<MoonPhase className="h-1/5 w-2/6 min-h-[120px]" />
			<SpreadSelector options={[
				{
					label: "Hermit's Guidance",
					value: "Hermit's Guidance"
				},
				{
					label: "Past, Present, Future",
					value: "Past, Present, Future"
				}
			]} />
			<div>hello</div>
		</>

	)
}
