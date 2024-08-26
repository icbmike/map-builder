import React, { ReactNode, createContext, useContext, useState } from 'react';

import { ReactElement } from 'react';

import "./Accordion.scss";

interface IAccordionContext {
    openItem?: string;
    setOpenItem: (name: string) => void;
}

const AccordionContext = createContext<IAccordionContext| null>(null)

interface IAccordionProps {
    selectedItem: string | undefined;
    onItemOpened: (name: string) => void;
    children: ReactElement<IAccordionItemProps> | ReactElement<IAccordionItemProps>[];
}

export const Accordion = ({ children, onItemOpened, selectedItem }: IAccordionProps) => {
    return <AccordionContext.Provider value={{openItem: selectedItem, setOpenItem: onItemOpened}}>
        <div className='accordion'>
            {children}
        </div>
    </AccordionContext.Provider>;
}

export interface IAccordionItemProps {
    name: string
    displayText: ReactNode
    children?: ReactNode
}

export const AccordionItem = ({name, displayText, children}: IAccordionItemProps) => {
    const {openItem, setOpenItem} = useContext(AccordionContext)!;

    const isOpen = openItem === name;

    return <div className="accordion-item">
        <div className={`accordion-item-summary ${isOpen && 'is-selected'}`} onClick={() => setOpenItem(name)}>{displayText}</div>
        {isOpen && children}
    </div>
}
