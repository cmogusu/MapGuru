import { Page } from "@/components/Page";
import { Body } from "@/components/Body";
import { MapModal } from "@/components/MapModal";

type Props = {
	params: Promise<{ categoryId: string }>;
};

export default async function Category({ params }: Props) {
	const { categoryId } = await params;

	return (
		<Page>
			<MapModal />
			<Body categoryId={categoryId} />
		</Page>
	);
}
