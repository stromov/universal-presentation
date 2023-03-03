import React from 'react';
import {Deck, Text, Box, UnorderedList, ListItem, Link, FlexBox} from 'spectacle';
import {
    Button,
    Select,
    InputLabel,
    NativeSelect,
    MenuItem,
    Switch,
    Autocomplete,
    TextField,
} from '@mui/material';
import {SelectChangeEvent} from '@mui/material/Select';

import {theme} from '../theme';
import {CommonSlide} from './CommonSlide';
import {CommonStepperList} from './CommonStepperList';

import carbon from '../assets/carbon.svg';

export const App = () => {
    const [multiselectValue, setMultiselectValue] = React.useState<string[]>([]);

    const handleMultiselectChange = (event: SelectChangeEvent<typeof multiselectValue>) => {
        const {
            target: {value},
        } = event;
        setMultiselectValue(typeof value === 'string' ? value.split(',') : value);
    };
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
                        'Вопросы, которые вы хотели бы задать разработчику',
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

            <CommonSlide heading="Рассмотрим пример">
                <iframe
                    style={{border: '1px solid rgba(0, 0, 0, 0.1)'}}
                    width="100%"
                    height="500px"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FY4SHhcrybGHdjP1n6HkyKd%2FDesigns-for-Yura%3Fnode-id%3D186%253A3907%26t%3DTTV7AGRZhAvqAnAa-1"
                    allowFullScreen
                />
            </CommonSlide>

            <CommonSlide heading="Разработка делает такое лицо">
                <Text fontSize="h1">😬</Text>
            </CommonSlide>

            <CommonSlide heading="Архитектура проекта">
                <iframe
                    style={{border: '1px solid rgba(0, 0, 0, 0.1)'}}
                    width="100%"
                    height="500px"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FY4SHhcrybGHdjP1n6HkyKd%2FDesigns-for-Yura%3Fnode-id%3D271%253A75%26t%3D1JELL9zhVNn0oBHU-1"
                    allowFullScreen
                />
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

            <CommonSlide heading="Потенциальные изменения">
                <iframe
                    style={{border: '1px solid rgba(0, 0, 0, 0.1)'}}
                    width="100%"
                    height="500px"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FY4SHhcrybGHdjP1n6HkyKd%2FDesigns-for-Yura%3Fnode-id%3D271%253A101%26t%3D1JELL9zhVNn0oBHU-1"
                    allowFullScreen
                />
            </CommonSlide>

            <CommonSlide heading="Потенциальные изменения">
                <iframe
                    style={{border: '1px solid rgba(0, 0, 0, 0.1)'}}
                    width="100%"
                    height="500px"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FY4SHhcrybGHdjP1n6HkyKd%2FDesigns-for-Yura%3Fnode-id%3D858%253A1096%26t%3DTTV7AGRZhAvqAnAa-1"
                    allowFullScreen
                />
            </CommonSlide>

            <CommonSlide heading="Потенциальные изменения">
                <iframe
                    style={{border: '1px solid rgba(0, 0, 0, 0.1)'}}
                    width="100%"
                    height="500px"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FY4SHhcrybGHdjP1n6HkyKd%2FDesigns-for-Yura%3Fnode-id%3D858%253A1152%26t%3DTTV7AGRZhAvqAnAa-1"
                    allowFullScreen
                />
            </CommonSlide>

            <CommonSlide heading="Возможные способы решения">
                <iframe
                    style={{border: '1px solid rgba(0, 0, 0, 0.1)'}}
                    width="100%"
                    height="500px"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FY4SHhcrybGHdjP1n6HkyKd%2FDesigns-for-Yura%3Fpage-id%3D186%253A3233%26node-id%3D186%253A3234%26viewport%3D503%252C274%252C0.07%26scaling%3Dscale-down-width%26starting-point-node-id%3D186%253A3234%26hotspot-hints%3D0"
                    allowFullScreen
                />
            </CommonSlide>

            <CommonSlide heading="Возможные способы решения">
                <iframe
                    style={{border: '1px solid rgba(0, 0, 0, 0.1)'}}
                    width="100%"
                    height="500px"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FY4SHhcrybGHdjP1n6HkyKd%2FDesigns-for-Yura%3Fpage-id%3D186%253A3233%26node-id%3D186%253A3392%26viewport%3D503%252C274%252C0.07%26scaling%3Dscale-down-width%26starting-point-node-id%3D186%253A3371%26hotspot-hints%3D0"
                    allowFullScreen
                />
            </CommonSlide>

            <CommonSlide heading="Возможные способы решения">
                <iframe
                    style={{border: '1px solid rgba(0, 0, 0, 0.1)'}}
                    width="100%"
                    height="500px"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FY4SHhcrybGHdjP1n6HkyKd%2FDesigns-for-Yura%3Fpage-id%3D186%253A3233%26node-id%3D186%253A3500%26viewport%3D503%252C274%252C0.07%26scaling%3Dscale-down-width%26starting-point-node-id%3D186%253A3459%26hotspot-hints%3D0"
                    allowFullScreen
                />
            </CommonSlide>

            <CommonSlide heading="Возможные способы решения">
                <iframe
                    style={{border: '1px solid rgba(0, 0, 0, 0.1)'}}
                    width="100%"
                    height="500px"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FY4SHhcrybGHdjP1n6HkyKd%2FDesigns-for-Yura%3Fpage-id%3D186%253A3233%26node-id%3D186%253A3569%26viewport%3D503%252C274%252C0.07%26scaling%3Dscale-down-width%26starting-point-node-id%3D186%253A3569%26hotspot-hints%3D0"
                    allowFullScreen
                />
            </CommonSlide>

            <CommonSlide heading="Возможные способы решения">
                <iframe
                    style={{border: '1px solid rgba(0, 0, 0, 0.1)'}}
                    width="100%"
                    height="500px"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FY4SHhcrybGHdjP1n6HkyKd%2FDesigns-for-Yura%3Fpage-id%3D186%253A3233%26node-id%3D186%253A3751%26viewport%3D503%252C274%252C0.07%26scaling%3Dscale-down-width%26starting-point-node-id%3D186%253A3751%26hotspot-hints%3D0"
                    allowFullScreen
                />
            </CommonSlide>

            <CommonSlide heading="Что важно помнить">
                <Text fontSize="h1">
                    Текст&nbsp;&nbsp;➡️&nbsp;&nbsp;Макет&nbsp;&nbsp;➡️&nbsp;&nbsp;Текст
                </Text>
            </CommonSlide>

            <CommonSlide heading={'Принимаем решение'}>
                <iframe
                    style={{border: '1px solid rgba(0, 0, 0, 0.1)'}}
                    width="100%"
                    height="500px"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FY4SHhcrybGHdjP1n6HkyKd%2FDesigns-for-Yura%3Fnode-id%3D186%253A3907%26t%3DTTV7AGRZhAvqAnAa-1"
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

            <CommonSlide
                heading="Макет, который легко читать"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <CommonStepperList
                    fontSize="p"
                    listMarginTop="48px"
                    itemMarginTop="24px"
                    items={[
                        'Собран на компонентах',
                        'Самодостаточен',
                        'Имеет структуру',
                        'Содержит все сценарии',
                        'Использует токены дизайн-системы',
                        'Не вынуждает разработчика что-либо додумывать',
                    ]}
                />
            </CommonSlide>

            <CommonSlide heading="Ревью" justifyContent="flex-start" alignItems="flex-start">
                <CommonStepperList
                    items={[
                        'Зачем? Все мы ленимся/ошибаемся',
                        'Когда? После код-ревью и тестирования',
                        'Как? Структурированный фидбэк',
                        'Бонус. Вы потестируете интерфейс',
                    ]}
                />
            </CommonSlide>

            <CommonSlide heading="Документация" justifyContent="flex-start" alignItems="flex-start">
                <CommonStepperList
                    items={[
                        'Зачем? Чтобы понимать актуальное состояние проекта',
                        'Когда? Прямо перед релизом или сразу после него',
                        'Как? Зависит от команды',
                        'Бонус. Периодически проверяем актуальность',
                    ]}
                />
            </CommonSlide>

            <CommonSlide heading="Вы прекрасны" justifyContent="flex-start" alignItems="flex-start">
                <CommonStepperList
                    items={[
                        'Имеете представление об архитектуре проекта',
                        'Знаете как подготовить макеты для разработки',
                        'Настроили процесс и держите всё под контролем',
                        'Периодически проверяете себя',
                        'Делитесь результатами своей работы',
                    ]}
                />
            </CommonSlide>

            <CommonSlide heading="Детали"></CommonSlide>

            <CommonSlide
                heading="Нативные элементы"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <CommonStepperList items={['Некоторые выглядят как мы ожидаем', 'Некоторые нет']} />
            </CommonSlide>

            <CommonSlide heading="Button">
                <Button variant="contained" style={{width: '200px', height: '50px'}}>
                    Click me
                </Button>
                <Box width="100px" />
                <button style={{width: '200px', height: '50px'}}>Click me</button>
            </CommonSlide>

            <CommonSlide heading="Select">
                <FlexBox flexDirection="column" alignItems="flex-start">
                    <InputLabel>MIU select</InputLabel>
                    <Select defaultValue={1} style={{width: '200px', height: '50px'}}>
                        <MenuItem value={1}>One</MenuItem>
                        <MenuItem value={2}>Two</MenuItem>
                        <MenuItem value={3}>Three</MenuItem>
                        <MenuItem value={4}>Four</MenuItem>
                    </Select>
                </FlexBox>
                <Box width="100px" />
                <FlexBox flexDirection="column" alignItems="flex-start">
                    <label>Native select</label>
                    <select defaultValue={1} style={{width: '200px', height: '50px'}}>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                        <option value={4}>Four</option>
                    </select>
                </FlexBox>
                <Box width="100px" />
                <FlexBox flexDirection="column" alignItems="flex-start">
                    <InputLabel>MIU native select</InputLabel>
                    <NativeSelect defaultValue={1} style={{width: '200px', height: '50px'}}>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                        <option value={4}>Four</option>
                    </NativeSelect>
                </FlexBox>
            </CommonSlide>

            <CommonSlide heading="Switch">
                <Switch />
                <Box width="100px" />
                <input type="checkbox" />
            </CommonSlide>

            <CommonSlide heading="Multiselect">
                <FlexBox flexDirection="column" alignItems="flex-start">
                    <InputLabel>MIU multiselect</InputLabel>
                    <Select
                        multiple
                        value={multiselectValue}
                        onChange={handleMultiselectChange}
                        style={{width: '200px', height: '50px'}}
                    >
                        <MenuItem value={1}>One</MenuItem>
                        <MenuItem value={2}>Two</MenuItem>
                        <MenuItem value={3}>Three</MenuItem>
                        <MenuItem value={4}>Four</MenuItem>
                    </Select>
                </FlexBox>
                <Box width="100px" />
                <FlexBox flexDirection="column" alignItems="flex-start">
                    <label>Native multiselect</label>
                    <select multiple defaultValue={1} style={{width: '200px', height: '50px'}}>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                        <option value={4}>Four</option>
                    </select>
                </FlexBox>
            </CommonSlide>

            <CommonSlide heading="ComboBox/SearchSelect">
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={['One', 'Two', 'Three', 'Four']}
                    sx={{width: 300}}
                    renderInput={params => <TextField {...params} label="Count" />}
                />
            </CommonSlide>

            <CommonSlide
                heading="Как так вышло?"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <CommonStepperList
                    items={[
                        'Стандартизировать компоненты сложно',
                        'Стандартизированные компоненты зачастую не покрывают требования',
                        'С помощью веб технологий можно делать практически любые интерфейсы',
                    ]}
                />
            </CommonSlide>

            <CommonSlide
                heading="В чём проблема?"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <CommonStepperList
                    items={[
                        'Заново изобретаем универсальные компоненты',
                        'Создаём переусложнённые компоненты',
                    ]}
                />
            </CommonSlide>

            <CommonSlide
                heading="Добавляем/изменяем компонент"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <CommonStepperList
                    items={[
                        'Накастомить и оставить',
                        'Накастомить, но потом проработать',
                        'Накастомить и подождать пока кто-нибудь проработает',
                        'Использовать компоненты, которые уже есть',
                    ]}
                />
            </CommonSlide>

            <CommonSlide
                heading="Консистентность"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <CommonStepperList
                    items={[
                        'Компоненты в фигме',
                        'Компоненты на портале дизайн-системы',
                        'Компоненты в коде',
                    ]}
                />
            </CommonSlide>

            <CommonSlide
                heading="Один источник правды"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <CommonStepperList
                    items={[
                        'Портал дизайн-системы',
                        'Не забываем контекст',
                        'Держим руку на пульсе',
                    ]}
                />
            </CommonSlide>

            <CommonSlide
                heading="Зачем изучать нативные компоненты?"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <CommonStepperList
                    items={[
                        'Заново изобретаем универсальные компоненты',
                        'Создаём переусложнённые компоненты',
                    ]}
                />
            </CommonSlide>

            <CommonSlide
                heading="Как начать коммуникацию"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <CommonStepperList
                    items={[
                        'Зовите разработку на свои встречи',
                        'Узнайте какие есть встречи у разработки',
                        'Найдите единомышленников',
                    ]}
                />
            </CommonSlide>

            <CommonSlide heading="Выводы" justifyContent="flex-start" alignItems="flex-start">
                <CommonStepperList
                    listMarginTop="40px"
                    items={[
                        'Если что-то не понятно, спросите',
                        'Если что-то важно, запишите',
                        'Старайтесь сохранить один источник правды',
                        'Делитесь знаниями',
                        'Будте нативны',
                        'Мы все хотим делать качественный продукт',
                    ]}
                />
            </CommonSlide>

            <CommonSlide
                heading="Бонус: анимации"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <CommonStepperList
                    items={['Простые: меняем 1-3 свойства', 'Сложные: смотришь и голова кружится']}
                />
            </CommonSlide>

            <CommonSlide heading="Простые анимации">
                <div className="animated"></div>
            </CommonSlide>

            <CommonSlide
                heading="Простые анимации"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <CommonStepperList
                    items={['Легко стандартизируются', 'В идеале являются частью дизайн-системы']}
                />
            </CommonSlide>

            <CommonSlide
                heading="Сложные анимации"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <CommonStepperList
                    items={['Просто поговорите с разработкой', 'Используйте lottie/origami ect.']}
                />
            </CommonSlide>

            <CommonSlide
                heading="Полезные ссылки"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <CommonStepperList
                    items={[
                        <Link
                            href="https://sherer.pro/blog/dizajn-dannyh-chast-1-chto-i-zachem/"
                            target="_blank"
                            color="primary"
                        >
                            Дизайн данных
                        </Link>,
                        <Link
                            href="https://www.w3schools.com/tags/"
                            target="_blank"
                            color="primary"
                        >
                            HTML tags
                        </Link>,
                        <Text>
                            Дизайн система:{' '}
                            <Link
                                href="https://www.nngroup.com/articles/design-systems-101/"
                                target="_blank"
                                color="primary"
                            >
                                NN group
                            </Link>
                            {', '}
                            <Link
                                href="https://uxdesign.cc/everything-you-need-to-know-about-design-systems-54b109851969"
                                target="_blank"
                                color="primary"
                            >
                                uxdesign.cc
                            </Link>
                        </Text>,
                        <Link href="https://cubic-bezier.com/" target="_blank" color="primary">
                            Кривая Безье (анимации)
                        </Link>,
                    ]}
                />
            </CommonSlide>

            <CommonSlide heading="Спасибо!" />

            <CommonSlide heading="Пишите">
                <FlexBox flexDirection="column" alignItems="flex-start">
                    <FlexBox marginBottom={10}>
                        <Box width="40px" marginRight={3} alignItems="baseline">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
                                <defs>
                                    <linearGradient
                                        id="linear-gradient"
                                        x1="120"
                                        y1="240"
                                        x2="120"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset="0" stop-color="#1d93d2" />
                                        <stop offset="1" stop-color="#38b0e3" />
                                    </linearGradient>
                                </defs>
                                <circle cx="120" cy="120" r="120" fill="url(#linear-gradient)" />
                                <path
                                    d="M81.229,128.772l14.237,39.406s1.78,3.687,3.686,3.687,30.255-29.492,30.255-29.492l31.525-60.89L81.737,118.6Z"
                                    fill="#c8daea"
                                />
                                <path
                                    d="M100.106,138.878l-2.733,29.046s-1.144,8.9,7.754,0,17.415-15.763,17.415-15.763"
                                    fill="#a9c6d8"
                                />
                                <path
                                    d="M81.486,130.178,52.2,120.636s-3.5-1.42-2.373-4.64c.232-.664.7-1.229,2.1-2.2,6.489-4.523,120.106-45.36,120.106-45.36s3.208-1.081,5.1-.362a2.766,2.766,0,0,1,1.885,2.055,9.357,9.357,0,0,1,.254,2.585c-.009.752-.1,1.449-.169,2.542-.692,11.165-21.4,94.493-21.4,94.493s-1.239,4.876-5.678,5.043A8.13,8.13,0,0,1,146.1,172.5c-8.711-7.493-38.819-27.727-45.472-32.177a1.27,1.27,0,0,1-.546-.9c-.093-.469.417-1.05.417-1.05s52.426-46.6,53.821-51.492c.108-.379-.3-.566-.848-.4-3.482,1.281-63.844,39.4-70.506,43.607A3.21,3.21,0,0,1,81.486,130.178Z"
                                    fill="#fff"
                                />
                            </svg>
                        </Box>
                        <Link
                            href="https://t.me/stromov"
                            target="_blank"
                            color="primary"
                            textDecoration="none"
                        >
                            @stromov
                        </Link>
                    </FlexBox>
                    <FlexBox alignItems="baseline">
                        <Box width="40px" marginRight={3}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66">
                                <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
                                <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
                                <path
                                    fill="#fbbc04"
                                    d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"
                                />
                                <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
                                <path
                                    fill="#c5221f"
                                    d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"
                                />
                            </svg>
                        </Box>
                        <Link
                            href="mailto:stromov.y@gmail.com"
                            target="_blank"
                            color="primary"
                            textDecoration="none"
                        >
                            stromov.y@gmail.com
                        </Link>
                    </FlexBox>
                </FlexBox>
            </CommonSlide>
        </Deck>
    );
};
