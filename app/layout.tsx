import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./ui/final.css";

const NotoSans = Noto_Sans({
	style: "normal",
	subsets: ["vietnamese"],
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		template: "%s | Phys-IT!",
		default: "Phys-IT!",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${NotoSans.className} relative antialiased`}>
				{children}
			</body>
		</html>
	);
}
