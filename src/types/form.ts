export type FormDataType = {
    email?: string;
    phone?: string;
    insured_fio?: string;
    insured_doc?: string;
    insured_serial?: string;
    insured_number?: string;
    insured_gender?: string;
    insured_reg?: string;
    insured_fact?: string;
    insured_dob?: string;
    policy_fio?: string;
    policy_doc?: string;
    policy_serial?: string;
    policy_number?: string;
    policy_gender?: string;
    policy_place?: string;
    policy_reg?: string;
    policy_fact?: string;
    policy_dob?: string;
};

export type FormErrorsType = {
    email?: string | null;
    phone?: string | null;
    insured_serial?: string | null;
    insured_number?: string | null;
    policy_serial?: string | null;
    policy_number?: string | null;
};