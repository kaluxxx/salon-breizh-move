import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {getThematics} from "@/app/action/thematicActions";
import SharedLayout from "@/app/reservation/exposant/sharedLayout";
import Confirmation from "@/app/reservation/exposant/confirmation/confirmation";

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