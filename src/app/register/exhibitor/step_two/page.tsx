import {QueryClient, HydrationBoundary, dehydrate} from "@tanstack/react-query";
import StepTwoForm from "@/app/register/exhibitor/step_two/form";
import SharedLayout from "@/app/register/exhibitor/sharedLayout";
import {getStands} from "@/app/action/standAction";

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