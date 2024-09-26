import SharedLayout from "@/app/register/exhibitor/sharedLayout";
import Confirmation from "@/app/register/exhibitor/confirmation/confirmation";

export default async function Page() {

    return (
        <SharedLayout>
            <Confirmation/>
        </SharedLayout>
    );
}