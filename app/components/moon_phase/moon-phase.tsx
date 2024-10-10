import Flex from "../util/flex-container";
import ImageGroup from "../util/image-group";

const moonPhases = ["New Moon", "Waxing Crescent", "First Quarter", "Waxing Gibbous", "Full Moon", "Waning Gibbous", "Third Quarter", "Waning Crescent"];
const componentStyles = {

}

export default function MoonPhase() {
	return (
		<Flex className="flex-col h-1/5">
			<h3 className="font-serif h-1/4">Moon Phase</h3>
			<Flex className="flex-col h-4/5">
				<Flex className="h-4/5">
					<ImageGroup
						path="/moon_phases"
						imageNames={moonPhases.map((phase, indx) => phase.replaceAll(" ", "_"))}
						includeIndx={true}
						imageType="svg"
						className="w-[calc(100%/(8*3))]"
						repeatAmount={3}
					/>
				</Flex>
				<Flex className="h-1/5">
					<ImageGroup
						imageNames="triangle"
						className="invert max-h-full"
						wrapDiv={true}
						center={true}
						wrapClassName="w-[calc(100%/8)]"
						repeatAmount={8}
					/>
				</Flex>
				<hr className=""/>
			</Flex>
		</Flex>
  )
}
