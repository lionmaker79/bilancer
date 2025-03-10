"use client"

import {Row} from "@tanstack/react-table"
import {MoreHorizontal} from "lucide-react"

import {Button} from "@/components/ui/button"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"


interface DataTableRowActionsProps<TData> {
    row: Row<TData>
}

export function DataTableRowActions<TData>({
                                               row: _,
                                           }: DataTableRowActionsProps<TData>) {
    // const task = taskSchema.parse(row.original)
    console.log(_);
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                >
                    <MoreHorizontal />
                    <span className="sr-only">Open menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px]">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}