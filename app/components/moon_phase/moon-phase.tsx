import generateStyles from "@/app/utils/style-helper";
import { Flex, FlexColumn } from "../util/flex-container";
import ImageGroup from "../util/image-group";
import SmallHeader from "../util/small-component-header";

const moonPhases = ["New Moon", "Waxing Crescent", "First Quarter", "Waxing Gibbous", "Full Moon", "Waning Gibbous", "Third Quarter", "Waning Crescent"];

const styles = {
	moonHeader: {
		thin: "thin:text-[20px]",
		base: "h-1/4 text-[2.5vh]"
	},
	contentContainer: {
		base: "h-4/5 relative",
	},
	moonPhaseContainer: {
		base: "h-4/5",
	},
	phaseIcons: {
		base: "w-[calc(100%/(8))]"
	},
	selectIconContainer: {
		base: "h-1/5"
	},
	selectIcon: {
		base: "invert max-w-full max-h-full m-auto"
	},
	selectIconWrapper: {
		base: "w-[calc(100%/8)]"
	}
}
const stylesStrings = {
	moonHeader: generateStyles(styles.moonHeader),
	contentContainer: generateStyles(styles.contentContainer),
	moonPhaseContainer: generateStyles(styles.moonPhaseContainer),
	phaseIcons: generateStyles(styles.phaseIcons),
	selectIconContainer: generateStyles(styles.selectIconContainer),
	selectIcon: generateStyles(styles.selectIcon),
	selectIconWrapper: generateStyles(styles.selectIconWrapper),
}

interface Prop {
	className?: string;
}

export default function MoonPhase({ className }: Prop) {
	return (
		<FlexColumn className={className ?? ""}>
			<SmallHeader className={stylesStrings.moonHeader} >Moon Phase</SmallHeader>
			<FlexColumn className={stylesStrings.contentContainer}>
				<Flex className={stylesStrings.moonPhaseContainer}>
					<ImageGroup
						path="/moon_phases"
						imageNames={moonPhases.map((phase, indx) => phase.replaceAll(" ", "_"))}
						includeIndx={true}
						imageType="svg"
						className={stylesStrings.phaseIcons}
					/>
				</Flex>
				<Flex className={stylesStrings.selectIconContainer}>
					<ImageGroup
						imageNames="triangle"
						className={stylesStrings.selectIcon}
						wrapDiv={true}
						center={true}
						wrapClassName={stylesStrings.selectIconWrapper}
						repeatAmount={8}
					/>
				</Flex>
				<hr className="absolute bottom-0 border-t-4 w-full" />
			</FlexColumn>
		</FlexColumn>
	)
}
