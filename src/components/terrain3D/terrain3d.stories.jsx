import { StoryContainer } from "../../../.storybook/story-container";
import { Terrain3d } from "./terrain3d";

export default {
	title: "Terrain3d",
};

export const Story = () => {
	return (
		<StoryContainer>
			<Terrain3d mapboxAccessToken={process.env.MAPBOX_ACCESS_TOKEN} />
		</StoryContainer>
	);
};
