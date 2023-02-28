import React from 'react';
import {Heading} from 'spectacle';

export const CommonHeading = ({children}: React.PropsWithChildren<Record<string, unknown>>) => {
    return <Heading textAlign="left">{children}</Heading>;
};
