import {QueryClient, HydrationBoundary, dehydrate} from "@tanstack/react-query";
import {getStands} from "@/app/action/standAction";
import SharedLayout from "@/app/reservation/exposant/sharedLayout";
import StepTwoForm from "@/app/reservation/exposant/stand/form";

export default async function Page() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["stands"],
        queryFn: getStands,
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <SharedLayout>
                <StepTwoForm/>
            </SharedLayout>
        </HydrationBoundary>
    );
}