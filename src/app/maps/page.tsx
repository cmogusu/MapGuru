"use client";

import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import Paper from "@mui/material/Paper";
import { Maps } from "@/pages/Maps";

export default function Home() {
	return (
		<DashboardLayout>
			<Paper sx={{ width: "100%" }}>
				<PageContainer>
					<Maps />
				</PageContainer>
			</Paper>
		</DashboardLayout>
	);
}
