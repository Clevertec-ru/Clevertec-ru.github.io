export type OfferFormState = {
    insuranceFor: string;
    insuranceType: string;
    sportType: string | null;
    birthDate: string;
    startDate: string;
    period: string | null;
    insuranceAmount: number;
    cost: number;
    errors: Record<string, string>;
};
