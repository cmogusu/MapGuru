"use client";

import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import Paper from "@mui/material/Paper";
import { App } from "../pages/Hello";

export default function Home() {
	return (
		<DashboardLayout>
			<Paper sx={{ width: "100%" }}>
				<PageContainer>
					<header>Hellow</header>
				</PageContainer>
				<App />
			</Paper>
		</DashboardLayout>
	);
}
