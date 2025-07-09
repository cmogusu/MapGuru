// import { classes } from "@/utils/style";
// import styles from "./section.module.css";

export const Section = ({
	as: Component = "div",
	children,
	className,
	ref,
	...rest
}) => (
	<Component
		// className={classes(styles.section, className)}
		ref={ref}
		{...rest}
	>
		{children}
	</Component>
);
