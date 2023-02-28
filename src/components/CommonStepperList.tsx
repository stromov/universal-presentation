import React from 'react';
import {UnorderedList, Stepper} from 'spectacle';

type Props = {
    items: React.ReactNode[];
    fontSize?: string;
    listMarginTop?: string;
    itemMarginTop?: string;
};

export const CommonStepperList = ({
    items,
    fontSize,
    listMarginTop = '60px',
    itemMarginTop = '32px',
}: Props) => (
    <UnorderedList fontSize={fontSize}>
        {items.map((item, index) => (
            <Stepper
                key={index}
                tagName="li"
                values={[item]}
                activeStyle={{opacity: '1', marginTop: index == 0 ? listMarginTop : itemMarginTop}}
            >
                {(_, __, isActive) => isActive && item}
            </Stepper>
        ))}
    </UnorderedList>
);
