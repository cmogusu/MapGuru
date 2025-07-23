import { Page } from "@/components/Page";
import { CardList } from "@/components/CardList";

type Props = {
	params: Promise<{ categoryId: string }>;
};

export default async function Category({ params }: Props) {
	const { categoryId } = await params;

	return (
		<Page>
			<CardList categoryId={categoryId} />
		</Page>
	);
}
