"use client";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ModalProps {
    title: string,
    description: string,
    isOpen: boolean,
    onClose: () => void,
    children?: React.ReactNode,
}

export const Modal = ({ title, description, isOpen, onClose, children }: ModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <DialogDescription>{description}</DialogDescription>
                <div>
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    );
}