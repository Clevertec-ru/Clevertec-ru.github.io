import React, { useEffect } from 'react';
import { type SelectProps } from '@alfalab/core-components/select';
import {
    setSportType,
    setPeriod,
    setOfferFormErrors,
    offerFormSelector,
} from '~/redux/slices/offer-form';
import { SelectResponsive } from '@alfalab/core-components/select/Component.responsive';
import { useAppDispatch, useAppSelector } from '~/hooks/typed-react-redux-hooks';

type SelectFieldProps = Omit<SelectProps, 'selected' | 'onChange'> & {
    name: 'sportType' | 'period';
    options: Array<{ key: string; content: string }>;
    onChange?: () => void;
};

export const SelectField: React.FC<SelectFieldProps> = ({
    name,
    options,
    onChange,
    ...selectProps
}) => {
    const dispatch = useAppDispatch();
    const fieldValue = useAppSelector(offerFormSelector)[name];
    // const fieldError = useAppSelector(formErrorsSelector)[name];

    const handleChange: SelectProps['onChange'] = ({ selected }) => {
        if (name === 'sportType') {
            dispatch(setSportType(selected?.key ?? null));
        } else if (name === 'period') {
            dispatch(setPeriod(selected?.key ?? null));
        }
        onChange?.();
    };

    useEffect(() => {
        if (!fieldValue) {
            dispatch(setOfferFormErrors({ [name]: 'Поле должно быть заполнено' }));
        } else {
            dispatch(setOfferFormErrors({ [name]: '' }));
        }
    }, [fieldValue, dispatch, name]);

    return (
        <SelectResponsive
            {...selectProps}
            selected={[fieldValue ? `${fieldValue}` : '']}
            onChange={handleChange}
            // error={fieldError}
            options={options}
            size={'m'}
        />
    );
};
