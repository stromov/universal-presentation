import React from 'react';
import {Deck, Text, Box, UnorderedList, ListItem, Stepper, FlexBox} from 'spectacle';

import {theme} from '../theme';
import {CommonSlide} from './CommonSlide';
import {CommonStepperList} from './CommonStepperList';

export const App = () => {
    return (
        <Deck theme={theme}>
            <CommonSlide
                heading={
                    <>
                        Как понять разработку <br /> и простить всех
                    </>
                }
            ></CommonSlide>

            <CommonSlide heading="Кто я" justifyContent="flex-start" alignItems="flex-start">
                <UnorderedList>
                    <ListItem style={{marginTop: '60px'}}>Юра Стромов</ListItem>
                    <ListItem style={{marginTop: '32px'}}>
                        5 лет в разработке (веб) интерфейсов
                    </ListItem>
                    <ListItem style={{marginTop: '32px'}}>
                        <FlexBox justifyContent="flex-start" alignItems="center" height={11}>
                            <Box width="100px">
                                <svg
                                    viewBox="0 0 86 25"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="nonzero"
                                        d="M65.5.813L64 12c-.688 5.063-1.813 6.625-3.563 6.625v6.063c6.813 0 9.75-4.063 10.688-11.688l.688-5.688h6v16.813h7.374V.875H65.5V.812zM57.813 13.188C57.813 5.311 52.813.25 46 .25c-7.25 0-12.313 5.438-12.313 12.188 0 7.562 5.5 12.25 12.626 12.25 3.562 0 7.374-1 9.687-3.063L52.875 17c-1.313 1.25-4.125 2-5.75 2-3.375 0-5.375-2-5.813-4.125H57.75v-1.688h.063zM41.25 9.938c.313-1.688 1.5-4 4.75-4 3.375 0 4.563 2.375 4.813 4H41.25zM14.75 13.375L9.937.812H.188v23.25h7.375V10.126l5.313 13.938h3.813L22 10.124v13.938h7.313V.813h-9.75z"
                                    ></path>
                                </svg>
                            </Box>
                            <Box width="24px"></Box>
                            <Box width="200px">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 170 20"
                                    width="100%"
                                    height="52px"
                                >
                                    <path d="M78.1 27h3.3L86 9.9V27h3.7V4.4h-5.1L80 21 75.4 4.4h-5.2V27h3.2V9.9L78.1 27zm27.1-11.2c0-4-2-5.5-6.1-5.5-2.6 0-4.6.8-5.8 1.5V15c1-.8 3.3-1.6 5.3-1.6 1.9 0 2.7.7 2.7 2.4v.9h-.6c-5.9 0-8.6 2-8.6 5.3s2 5.2 5 5.2c2.3 0 3.3-.7 4-1.5h.2c0 .4.2 1 .3 1.3h3.8c-.1-1.3-.2-2.7-.2-4v-7.2zm-3.9 7.3c-.5.7-1.4 1.3-2.8 1.3-1.6 0-2.4-1-2.4-2.4 0-1.9 1.3-2.6 4.7-2.6h.6v3.7zm10.6-12.5h-3.6v21.1h3.9v-6.6c1 1.5 2.4 2.2 4.1 2.2 3.8 0 6.4-3 6.4-8.5s-2.5-8.5-6.2-8.5c-1.8 0-3.3.8-4.4 2.4l-.2-2.1zm3.3 13.7c-2 0-3.1-1.7-3.1-5.4 0-3.8 1.1-5.5 3.3-5.5 2.1 0 3.2 1.7 3.2 5.4 0 3.8-1.1 5.5-3.4 5.5zm19.6 2.7h4.4l-6.2-8.8 5.5-7.6h-3.9l-5.5 7.6v-7.6h-3.9V27h3.9v-8l5.7 8zm17.4-1.1v-3.2c-1.2.8-3.2 1.5-5.1 1.5-2.8 0-3.9-1.3-4.1-4.1h9.3V18c0-5.7-2.5-7.8-6.4-7.8-4.7 0-7 3.6-7 8.6 0 5.7 2.8 8.5 7.7 8.5 2.7 0 4.5-.6 5.6-1.4zm-6.3-12.5c1.9 0 2.5 1.6 2.5 3.6v.3H143c.1-2.6 1.1-3.9 2.9-3.9zm20.3.3v-3.1h-13v3.1h4.6V27h3.9V13.7h4.5z" />
                                    <path
                                        d="M47.1 31c8.3 0 15-6.7 15-15s-6.7-15-15-15-15 6.7-15 15c-.1 8.3 6.7 15 15 15z"
                                        fill="#FED42B"
                                    />
                                    <circle cx="15" cy="16" r="15" fill="#FC3F1D" />
                                    <path
                                        d="M17.2 9.4h-1.5c-2.6 0-3.9 1.3-3.9 3.3 0 2.2.9 3.3 2.8 4.6l1.5 1.1-4.3 6.7H8.3l4.1-6.1c-2.4-1.7-3.7-3.3-3.7-6.1 0-3.5 2.4-5.9 7-5.9h4.6v18h-3V9.4z"
                                        fill="#FFF"
                                    />
                                    <clipPath id="a">
                                        <path d="M47.1 31c8.3 0 15-6.7 15-15s-6.7-15-15-15-15 6.7-15 15c-.1 8.3 6.7 15 15 15z" />
                                    </clipPath>
                                    <path
                                        d="M39.7 9.2L26.5 26.5l3.5 4 9.8-13-1 7.1 5.5 1.9L51 15.8c-.3 2-.8 6.6 3.6 8 6.9 2.1 12.9-10.3 15.7-16.6l-4-2.1c-3.1 6.5-7.9 13.7-9.8 13.2-1.9-.5-.2-6.6.9-10.5v-.1l-6.1-2.1L44 17.5l1-6.5-5.3-1.8z"
                                        clip-path="url(#a)"
                                    />
                                </svg>
                            </Box>
                        </FlexBox>
                    </ListItem>
                </UnorderedList>
            </CommonSlide>

            <CommonSlide
                heading="О чём поговорим"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <CommonStepperList
                    items={[
                        'Стереотипы',
                        'Коммуникация',
                        'Процессы',
                        'Внутренняя кухня разработки',
                    ]}
                />
            </CommonSlide>

            <CommonSlide
                heading="Как мы видим друг друга"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <CommonStepperList
                    items={[
                        'Разработчики исследователей',
                        'Разработчики дизайнеров',
                        'Исследователи/дизайнеры разработчиков',
                    ]}
                />
            </CommonSlide>

            <CommonSlide heading="Как же быть?">
                <Text fontSize="h1">
                    👩‍💻💬
                    <Box style={{display: 'inline-block', transform: 'scaleX(-1)'}}>💬</Box>
                    🧑‍💻
                </Text>
            </CommonSlide>

            <CommonSlide heading="Рассмотрим пример">Добавь макет</CommonSlide>

            <CommonSlide heading="Разработка делает такое лицо">
                <Text fontSize="h1">😬</Text>
            </CommonSlide>

            <CommonSlide heading="Архитектура проекта">
                <iframe
                    style={{border: '1px solid rgba(0, 0, 0, 0.1)'}}
                    width="100%"
                    height="500px"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FY4SHhcrybGHdjP1n6HkyKd%2FTest-prototype%3Fnode-id%3D2%253A141%26t%3DedwWdjFKriCGqGGW-1"
                    allowFullScreen
                ></iframe>
            </CommonSlide>

            <CommonSlide
                heading="В голове у разработчика"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <CommonStepperList
                    items={[
                        'Обновить данные в сервисе пользователя',
                        'Решить какие данные мы будем хранить',
                        'Решить где мы будем хранить данные',
                        'Решить как мы будем получать данные',
                    ]}
                />
            </CommonSlide>

            <CommonSlide heading="Возможные способы решения">
                <Text>Последовательные запросы</Text>
            </CommonSlide>

            <CommonSlide heading="Возможные способы решения">
                <Text>Параллельные запросы запросы</Text>
            </CommonSlide>

            <CommonSlide heading="Возможные способы решения">
                <Text>Запрос в один сервис</Text>
            </CommonSlide>

            <CommonSlide heading="Возможные способы решения">
                <Text>Прослойка с последовательными запросами</Text>
            </CommonSlide>

            <CommonSlide heading="Возможные способы решения">
                <Text>Прослойка с параллельными запросами</Text>
            </CommonSlide>

            <CommonSlide heading="Что важно помнить">
                <Text fontSize="h1">
                    Текст&nbsp;&nbsp;➡️&nbsp;&nbsp;Макет&nbsp;&nbsp;➡️&nbsp;&nbsp;Текст
                </Text>
            </CommonSlide>

            <CommonSlide
                heading={
                    <span>
                        Разговариваем и <br /> принимаем решение
                    </span>
                }
            >
                <iframe
                    height="450"
                    width="800"
                    src="https://www.figma.com/embed?embed_host=universal-presentation&url=https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File"
                    allowFullScreen
                />
            </CommonSlide>

            <CommonSlide heading="Макет как продукт">
                <Text fontSize="h1">📦</Text>
            </CommonSlide>

            <CommonSlide
                heading="Подходы к реализации макетов"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <CommonStepperList
                    items={['Pixel-perfect', 'Понимающий', 'С придирками', 'Я лучше тебя знаю']}
                />
            </CommonSlide>

            <CommonSlide
                heading="Почему сложно читать макет"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <CommonStepperList
                    fontSize="p"
                    listMarginTop="48px"
                    itemMarginTop="24px"
                    items={[
                        'Скриншоты вместо компонентов, компоненты поверх скриншотов',
                        'Проектируемый компонент вырван из контекста',
                        'У макета нет структуры',
                        'Макет продолжает меняться, когда задача уже в разработке',
                        'Чтобы понять как реализовать какой-либо элемент, нужно лезть в другие макеты',
                        'Типографика/цвета/иконки не соответствуют дизайн-системе',
                        <span>
                            Типографика/цвета/иконки соответствуют дизайн-системе,
                            <br />
                            но в макетах вместо наименований из дизайн-системы просто css свойства
                        </span>,
                    ]}
                />
            </CommonSlide>
        </Deck>
    );
};
