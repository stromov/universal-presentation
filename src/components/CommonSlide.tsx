import React from 'react';
import {Slide, FullScreen, FlexBox} from 'spectacle';

import {CommonHeading} from './CommonHeading';

type Props = {
    heading: React.ReactNode;
    flexDirection?: 'row' | 'column';
    justifyContent?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around'
        | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
};

export const CommonSlide = ({
    children,
    heading,
    flexDirection = 'row',
    justifyContent = 'center',
    alignItems = 'center',
}: React.PropsWithChildren<Props>) => {
    return (
        <Slide backgroundColor="white" padding={10}>
            <CommonHeading>{heading}</CommonHeading>
            <FlexBox
                height="100%"
                flexDirection={flexDirection}
                justifyContent={justifyContent}
                alignItems={alignItems}
            >
                {children}
            </FlexBox>

            <FullScreen
                size={23}
                style={{
                    position: 'fixed',
                    bottom: '0',
                    left: '0',
                    width: '100px',
                    height: '100px',
                    color: 'white',
                }}
            />
        </Slide>
    );
};
