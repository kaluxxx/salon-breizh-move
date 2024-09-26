import {QueryClient, HydrationBoundary, dehydrate} from "@tanstack/react-query";
import {getThematics} from "@/app/action/thematicActions";
import SharedLayout from "@/app/register/exhibitor/sharedLayout";
import StepOneForm from "@/app/register/exhibitor/step_one/form";

export default async function Page() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["thematics"],
        queryFn: getThematics,
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <SharedLayout>
                <StepOneForm/>
            </SharedLayout>
        </HydrationBoundary>
    );
}