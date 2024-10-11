"use client";
import React from 'react'
import { Flex, FlexColumn } from '../util/flex-container'
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import "./spread-selector.css";
import { pre } from 'framer-motion/client';

const itemVariants: Variants = {
	open: {
		opacity: 1,
		y: 0,
		transition: { type: "spring", stiffness: 300, damping: 24 }
	},
	closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

interface Props {
	options: { label: string, value: string }[];
}

export default function SpreadSelector({ options }: Props) {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState("Select Spread");
	const [prevSelected, setPrevSelected] = useState("");

	console.log(prevSelected === selected);
	return (
		<FlexColumn className='items-center relative h-1/5'>
			<motion.nav
				initial={false}
				animate={isOpen ? "open" : ["closed", prevSelected !== selected ? "changed" : ""]}
				className="flex items-center justify-center w-full h-full"
			>
				<motion.button
					whileTap={{ scale: 0.97 }}
					onClick={() => setIsOpen(!isOpen)}
					className='font-serif flex items-center justify-center content-between text-7xl w-3/5 h-3/5'
					role='combobox'
					aria-haspopup="listbox"
					aria-expanded={isOpen}
					aria-controls="spread-options"
				>
					<motion.div
						className="w-full flex items-center justify-center leading-[3.5rem] text-8xl font-outline-5"
						initial={{ opacity: 1, scale: 1 }}
						variants={{
							changed: { opacity: [0, 1], scale: [0, 1] }
						}}
						transition={{
							duration: 2,
							delay: 0.5,
							ease: [0, 0.71, 0.2, 1.01]
						}}
					>
						{selected}
					</motion.div>
					<motion.div
						variants={{
							open: { rotate: 180 },
							closed: { rotate: 0 }
						}}
						transition={{ duration: 0.2 }}
						style={{ originY: 0.55 }}
					>
						<svg width="15" height="15" viewBox="0 0 20 20">
							<path d="M0 7 L 20 7 L 10 16" />
						</svg>
					</motion.div>
				</motion.button>

			</motion.nav>
			<motion.ul
				variants={{
					open: {
						clipPath: "inset(0% 0% 0% 0% round 10px)",
						transition: {
							type: "spring",
							bounce: 0,
							duration: 0.7,
							delayChildren: 0.3,
							staggerChildren: 0.05
						}
					},
					closed: {
						clipPath: "inset(10% 50% 90% 50% round 10px)",
						transition: {
							type: "spring",
							bounce: 0,
							duration: 0.3
						}
					}
				}}
				style={{ pointerEvents: isOpen ? "auto" : "none" }}
				className='absolute top-full w-3/5'
				initial={false}
				animate={isOpen ? "open" : "closed"}
				role="listbox"
				id="spread-options"
			>
				{
					options?.map(({ label, value }) => {
						return (
							<motion.li
								variants={itemVariants}
								aria-label={label}
								aria-selected={selected === value}
								onClick={() => {
									setPrevSelected(selected);
									setSelected(value);
									setIsOpen(!isOpen);
								}}
								className={selected === value ? "border-4 border-black rounded-[10px] box-border" : "border-4 border-white"}>
								{label}
							</motion.li>
						)
					})
				}
			</motion.ul>
		</FlexColumn>
	);
}
