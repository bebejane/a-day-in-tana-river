'use client';

import s from './About.module.scss';
import cn from 'classnames';
import Content from '@/components/Content';
import { useState, useEffect, useRef } from 'react';

export type AboutProps = {
	text: NonNullable<StartQuery['aDayInTanaRiver']>['text'];
};

export default function About({ text }: AboutProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [showAboutButton, setShowAboutButton] = useState(true);
	const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const isOpenRef = useRef(isOpen);

	// Keep ref in sync with state
	useEffect(() => {
		isOpenRef.current = isOpen;
	}, [isOpen]);

	// Clear existing timeout
	const clearHideTimeout = () => {
		if (hideTimeoutRef.current) {
			clearTimeout(hideTimeoutRef.current);
			hideTimeoutRef.current = null;
		}
	};

	// Hide About button after 3 seconds (only when modal is closed)
	const scheduleHideAboutButton = () => {
		clearHideTimeout();
		hideTimeoutRef.current = setTimeout(() => {
			// Check if modal is still closed before hiding
			if (!isOpenRef.current) {
				setShowAboutButton(false);
			}
		}, 3000);
	};

	// Handle mouse movement
	useEffect(() => {
		const handleMouseMove = () => {
			// Only handle mouse movement when modal is closed
			if (!isOpenRef.current) {
				setShowAboutButton(true);
				scheduleHideAboutButton();
			}
		};

		window.addEventListener('mousemove', handleMouseMove);

		// Initial hide after 3 seconds (only if modal is closed)
		if (!isOpen) {
			scheduleHideAboutButton();
		}

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			clearHideTimeout();
		};
	}, [isOpen]);

	// Handle opening modal
	function handleAboutClick() {
		setIsOpen(true);
		setShowAboutButton(false); // Hide About button, Close will be shown instead
		clearHideTimeout();
	}

	// Handle closing modal
	function handleCloseClick() {
		setIsOpen(false);
		setShowAboutButton(true); // Show About button again
		// Hide after 3 seconds
		scheduleHideAboutButton();
	}

	return (
		<>
			{!isOpen && (
				<button 
					className={cn(s.button, s.aboutButton, showAboutButton && s.visible)} 
					onClick={handleAboutClick}
				>
					About
				</button>
			)}
			{isOpen && (
				<button 
					className={cn(s.button, s.closeButton)} 
					onClick={handleCloseClick}
				>
					Close
				</button>
			)}
			<div className={cn(s.about, isOpen && s.open)}>
				<div className={`${s.modal} ${isOpen ? s.open : ''}`}>
					<Content content={text} />
				</div>
			</div>
		</>
	);
}
