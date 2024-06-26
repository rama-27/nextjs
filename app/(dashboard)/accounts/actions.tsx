"use client";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDeleteAccount } from "@/features/accounts/api/use-delete-account";
import { useOpenAccount } from "@/features/accounts/hooks/use-open-account";
import { useConfirm } from "@/hooks/use-confirm";
import { Edit, MoreHorizontal, TrashIcon } from "lucide-react";


type Props={
    id:string;
}
export const Actions=({id}:Props)=>{
    const[ConfirmDialog,confirm]=useConfirm(
        "Are You Sure?",
        "You are about to delete this Account"
    );
    const deleteMutation=useDeleteAccount(id);
    const {onOpen}=useOpenAccount();


    const handleDelete = async()=>{
        const ok=await confirm();
        if(ok){
            deleteMutation.mutate();
        }

    };
    return(
        <>
        <ConfirmDialog/>
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="ghost"
                className="size-8 p-0">
                    <MoreHorizontal/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem
                disabled={deleteMutation.isPending}
                onClick={()=>onOpen(id)}
                >
                    <Edit className="size-4 mr-2"/>Edit</DropdownMenuItem>
                <DropdownMenuItem
                disabled={deleteMutation.isPending}
                onClick={handleDelete}
                >
                    <TrashIcon/>
                    Delete</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        </>
    );
};