"use client";

import { Modal } from "@/components/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// formSchema
const formSchema = z.object({
    name: z.string().min(5, { message: "Store name must be at least 5 characters long" }),

});


export const StoreModal = () => {

    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    });

    const onSubmit = form.handleSubmit(async (values: z.infer<typeof formSchema>) => {
        console.log(values);
    });

    const storeModal = useStoreModal();
    return (
        <Modal title={"Store"} description={"Add a new store to manage your categories and products"} isOpen={storeModal.isOpen} onClose={storeModal.onClose}>
            <div>
                <div className={"space-y-4 pb-4, py-2"}>
                    <Form {...form}>
                        <form onSubmit={onSubmit}>
                            <FormField control={form.control} name="name" render={({field}) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input disabled={isLoading} placeholder="Store Name" {...field} />
                                    </FormControl>
                                    <FormMessage>{form.formState.errors.name?.message}</FormMessage>
                                </FormItem>
                            )} />

                            <div className={"flex pt-6 justify-end w-full items-center"}>
                                <Button type="button" onClick={storeModal.onClose} variant={"destructive"} className={"mr-2"} size={"sm"} disabled={isLoading}>Cancel</Button>
                                <Button type="submit" variant={"secondary"} size={"sm"} className={"mr-2"} disabled={isLoading}>Continue</Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </Modal>
    );
}