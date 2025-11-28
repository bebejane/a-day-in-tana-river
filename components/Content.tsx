import { StructuredContent } from 'next-dato-utils/components';

export type Props = {
	id?: string;
	content: any;
	styles?: any;
	className?: string;
	blocks?: any;
};

export default function Content({ content, styles, className }: Props) {
	if (!content) return null;

	return (
		<StructuredContent
			className={className}
			styles={{
				...styles,
			}}
			content={content}
		/>
	);
}
