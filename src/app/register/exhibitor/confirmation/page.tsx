import SharedLayout from "@/app/register/exhibitor/sharedLayout";
import Confirmation from "@/app/register/exhibitor/confirmation/confirmation";
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {getThematics} from "@/app/action/thematicActions";

export default async function Page() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["thematics"],
        queryFn: getThematics,
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <SharedLayout>
                <Confirmation/>
            </SharedLayout>
        </HydrationBoundary>
    );
}