import React from 'react'
import { Flex } from './flex-container';

interface Props {
	imageNames: string[] | string;
	path?: string;
	className?: string;
	imageType?: string;
	includeIndx?: boolean;
	wrapDiv?: boolean;
	center?: boolean;
	wrapClassName?: string;
	repeatAmount?: number;
  }

export default function ImageGroup({ imageNames, path, className, imageType, includeIndx, wrapDiv, wrapClassName, repeatAmount = 1, center }: Props) {

	const elements: React.ReactNode[] = [];

	if(typeof imageNames === "string") {

		for(let index = 0; index < repeatAmount; index++){

			elements.push(
				wrapDiv ?
					<Flex className={center ? "content-center justify-center " : "" + wrapClassName}>
						<img
							className={className}
							src={`${path ?? ""}/${includeIndx ? `${index}_` : ""}${imageNames}.${imageType ?? "png"}`}/>
					</Flex>
					:
					<img
						className={className}
						src={`${path ?? ""}/${includeIndx ? `${index}_` : ""}${imageNames}.${imageType ?? "png"}`}/>
			);
		}
	}
	else {
		for (let index = 0; index < imageNames.length * repeatAmount; index++){
			elements.push(
				wrapDiv ?
					<Flex
						className={center ? "content-center justify-center " : "" + wrapClassName}>
						<img
							className={className}
							src={`${path ?? ""}/${includeIndx ? `${index % imageNames.length}_` : ""}${imageNames[index % imageNames.length]}.${imageType ?? "png"}`} />
					</Flex>
					:
					<img
						className={className}
						src={`${path}/${includeIndx ? `${index % imageNames.length}_` : ""}${imageNames[index % imageNames.length]}.${imageType ?? "png"}`}/>
			);
		}
		imageNames.forEach((name: string, index: number) => {
			
		});
	}
	return elements;
}
