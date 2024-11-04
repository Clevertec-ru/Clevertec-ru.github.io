import React, { useEffect } from 'react';
import { parse } from 'date-fns/parse';
import { Calendar } from '@alfalab/core-components/calendar';
import {
    UniversalDateInput,
    type UniversalDateInputProps,
} from '@alfalab/core-components/universal-date-input';
import {
    setBirthDate,
    setStartDate,
    setOfferFormErrors,
    offerFormSelector,
} from '~/redux/slices/offer-form';
import { SHORT_DATE } from '~/constants/dates';
import { useAppDispatch, useAppSelector } from '~/hooks/typed-react-redux-hooks';

type CalendarInputFieldProps = Omit<
    UniversalDateInputProps,
    'onChange' | 'defaultValue' | 'view'
> & {
    name: 'birthDate' | 'startDate';
    onChange?: (value: string) => void;
};

// const isMobileCalendarView = window.matchMedia(`(max-width: 720px)`).matches;

export const CalendarInputField: React.FC<CalendarInputFieldProps> = ({
    name,
    onChange,
    ...calendarInputProps
}) => {
    const dispatch = useAppDispatch();
    const fieldValue = useAppSelector(offerFormSelector)[name];
    // const fieldError = useAppSelector(formErrorsSelector)[name];

    const handleChange = (value: string) => {
        dispatch(name === 'birthDate' ? setBirthDate(value) : setStartDate(value));
        onChange?.(value);
    };

    useEffect(() => {
        if (!fieldValue) {
            dispatch(setOfferFormErrors({ [name]: 'Поле должно быть заполнено' }));
        } else {
            dispatch(setOfferFormErrors({ [name]: '' }));
        }
    }, [fieldValue, dispatch, name]);

    return (
        <UniversalDateInput
            {...calendarInputProps}
            onChange={(_, value) => handleChange(value)}
            view='date'
            picker={true}
            Calendar={Calendar}
            value={fieldValue ? parse(fieldValue, SHORT_DATE, new Date()) : null}
            // error={fieldError}
            name={name}
            size={'m'}
            // disableUserInput={isMobileCalendarView}
        />
    );
};
