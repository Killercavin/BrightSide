"use client";

import { Modal } from "@/components/modal";
import { useStoreModal } from "@/hooks/use-store-modal";

export const StoreModal = () => {

    const storeModal = useStoreModal();
    return (
        <Modal title={"Store"} description={"Store Name"} isOpen={storeModal.isOpen} onClose={storeModal.onClose} />
    );
}