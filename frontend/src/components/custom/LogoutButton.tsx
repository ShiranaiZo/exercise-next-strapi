import { logoutAction } from "@/data/actions/auth-actions";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export function LogoutButton() {
    return (
        <form action={logoutAction}>
            <Button type="submit">
                <LogOut className="w-6 h-6 hover:text-primary" />
            </Button>
        </form>
    );
}
