import {create} from 'zustand';

interface useProModalStore{
    isOpen:boolean;
    onOpen:()=> void;
    OnClose :()=>void;
};

export const useProModal = create<useProModalStore>((set)=>({
    isOpen:false,
    onOpen:() =>set({isOpen:true}),
    OnClose:() =>set({isOpen:false}),
}));

