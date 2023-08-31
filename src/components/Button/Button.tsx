import "./Button.css";

interface ButtonProps {
	text: string;
	icon?: string;
	type: "vibrant" | "transparent";
	onClick: () => void;
}

export default function Button({ text, icon, type, onClick }: ButtonProps) {
	return (
		<button className={type} onClick={onClick}>
			{text}
			{icon && <span className="">{icon}</span>}
		</button>
	);
}
