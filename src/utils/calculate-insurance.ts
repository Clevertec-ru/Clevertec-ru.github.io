import { OfferFormState } from '~/types/offer-form-types';

type CalculateInsurance = Pick<
    OfferFormState,
    'sportType' | 'birthDate' | 'startDate' | 'period' | 'insuranceFor'
>;

export const calculateInsurance = ({
    sportType,
    birthDate,
    startDate,
    period,
    insuranceFor,
}: CalculateInsurance) => {
    const emptyAmount = !sportType || !birthDate || !startDate || !period;

    if (emptyAmount) {
        return { amount: 0, cost: 0 };
    }

    const baseAmount = insuranceFor === 'child' ? 800000 : 1000000;

    let multiplier = 1;
    switch (period) {
        case '6_months':
            multiplier = 1.05;
            break;
        case '1_year':
            multiplier = 1.1;
            break;
        case '2_years':
            multiplier = 1.2;
            break;
        case '3_years':
            multiplier = 1.3;
            break;
        default:
            multiplier = 1;
    }

    const calculatedAmount = baseAmount * multiplier;
    const calculatedCost = calculatedAmount / 12 + (insuranceFor === 'child' ? 800 : 980);

    return { amount: calculatedAmount, cost: calculatedCost };
};
