import { HTMLInputTypeAttribute } from "react";

export default function Input(props: {
	name: string;
	type?: HTMLInputTypeAttribute;
	placeholder?: string;
}) {
	const { type = "text", name, placeholder } = props;
	return (
		<input
			type={type}
			id={name}
			name={name}
			placeholder={placeholder}
			className="w-full rounded-md px-3 py-2 text-white outline-3 outline-gray-400 transition-colors focus:outline-green-400"
		/>
	);
}
