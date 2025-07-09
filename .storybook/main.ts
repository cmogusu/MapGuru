import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@chromatic-com/storybook",
		"@storybook/addon-docs",
		"@storybook/addon-onboarding",
		"@storybook/addon-a11y",
		"@storybook/addon-vitest",
	],
	framework: {
		name: "@storybook/nextjs-vite",
		options: {},
	},
	staticDirs: ["../public"],
	async viteFinal(config) {
		// Merge custom configuration into the default config
		const { mergeConfig } = await import("vite");

		return mergeConfig(config, {
			// Add dependencies to pre-optimization
			assetsInclude: ["**/*.glb", "**/*.hdr", "**/*.glsl"],
			build: {
				assetsInlineLimit: 1024,
			},
		});
	},
};
export default config;
