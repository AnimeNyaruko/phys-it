"use client";

import Input from "@/components/input";

export default function Page() {
	return (
		<div className="page-login flex h-screen w-screen items-center justify-center">
			<form
				className="flex h-fit w-1/3 flex-col items-center gap-y-10 rounded-xl bg-[rgba(255,255,255,0.15)] px-20 py-10 backdrop-blur-sm"
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<p className="text-5xl font-bold text-white">ĐĂNG NHẬP</p>
				<Input placeholder="Đăng nhập | Email" name="username" />
				<Input placeholder="Mật khẩu" type="password" name="password" />
				<button
					className="cursor-pointer rounded-2xl border-2 border-green-400 px-7 py-5 text-center text-2xl font-bold text-[rgba(255,255,255,.75)] hover:bg-green-400 hover:text-white focus:bg-green-400 focus:text-white"
					type="submit"
				>
					Đăng nhập
				</button>
			</form>
		</div>
	);
}
