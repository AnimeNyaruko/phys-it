"use client";
import Image from "next/image";
import bg from "@/public/non-bg_logo.png";
import TP from "@/public/TP_logo.png";
import PTNK from "@/public/ptnk_logo.png";
import Rounded_Logo from "@/public/rounded_logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Page() {
	return (
		<>
			<div className="relative flex h-screen w-full flex-col">
				<header className="relative flex w-full justify-between bg-[#121229] px-15 md:h-[50px] lg:h-[75px]">
					<div>
						<div className="relative flex h-full w-auto items-center gap-x-10">
							<Image className="relative h-3/4 w-auto" src={bg} alt="logo" />
							<p className="font-bold text-white">Trang chủ</p>
							<div className="flex items-center gap-x-2">
								<p className="font-bold text-white">Danh mục</p>
								<FontAwesomeIcon
									className="text-[rgba(255,255,255,.5)]"
									icon={faAngleDown}
								/>
							</div>
						</div>
					</div>
					<div className="flex items-center gap-x-10">
						<p className="font-bold text-white">Đăng nhập</p>
						<p className="rounded-2xl border-2 border-white px-5 py-3 font-bold text-white">
							Đăng ký
						</p>
					</div>
				</header>
				<div className="grow"></div>
			</div>
			<footer className="relative flex w-full flex-col bg-[#121229] px-20 py-5 md:h-[225px] lg:h-[250px]">
				<div className="relative flex h-[100px] gap-x-5">
					<div className="relative aspect-square h-full">
						<Image
							className="aspect-square h-full"
							src={Rounded_Logo}
							alt="logo web"
						/>
					</div>
					<div className="relative aspect-square h-full">
						<Image
							className="aspect-square h-full"
							src={TP}
							alt="logo Trần Phú"
						/>
					</div>
					<div className="relative aspect-square h-full">
						<Image
							className="aspect-square h-full"
							src={PTNK}
							alt="logo Phổ thông Năng Khiếu"
						/>
					</div>
				</div>
				<div className="mt-auto text-center text-xs text-white">
					© 2025 Phys-IT!, created by{" "}
					<span className="font-bold underline">Trương Quốc Sang</span> &{" "}
					<span className="font-bold underline">Sẩm Pí Diệu</span>
				</div>
			</footer>
		</>
	);
}
