import Link from "next/link";
import { ReactNode } from "react";

const styles: { [key: string]: string } = {
    // Modified the primary style to have transparent background, black text by default,
    // and a solid 'newblue' background with white text on hover.
    // The border color is also set to 'newblue'.
	primary: "bg-transparent text-black hover:bg-newblue hover:text-white border-[.2rem] border-newblue uppercase md:text-2xl text-lg md:px-16 px-10 md:py-5 py-4",
	secondary: "bg-white border-[.2rem] hover:bg-gray hover:bg-opacity-85 uppercase md:text-md text-sm md:px-5 px-2 md:py-3 py-1",
	noBorder: "border-0 hover:bg-white hover:bg-opacity-0 uppercase md:text-2xl text-lg md:px-16 px-10 md:py-5 py-4",
	"topbar-menu": "border-[.2rem] hover:bg-white hover:bg-opacity-10 uppercase md:w-36 md:h-16 w-24 h-12 md:text-base text-sm text-center",
	custom: "" // This style is empty and intended for cases where the user provides all styling via the className prop, including default and hover states.
}

export default function Button({ children, className = "", style = "primary", url, inNewTab = false, ...props }: { children: ReactNode, className?: string, style?: string, url?: string, inNewTab?: boolean } & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
    // The className prop is merged last, allowing it to override previous classes
    // from the default styles (bg-white text-newblue) and the selected style (styles[style])
    // Using the 'custom' style allows full control via className without conflicting base styles.
	const button = <button className={`transition-all flex items-center rounded-sm bg-white text-newblue ${styles[style] || ""} ${className}`} {...props}>{children}</button>;

	// This wraps the button in a link only if a url is provided, avoiding the need to duplicate the button code
	return (url != undefined ? <Link href={url} target={inNewTab ? "_blank" : undefined}>
		{button}
	</Link> : button);
}
