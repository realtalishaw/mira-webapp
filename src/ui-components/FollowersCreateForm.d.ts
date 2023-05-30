/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FollowersCreateFormInputValues = {
    createdAt?: string;
};
export declare type FollowersCreateFormValidationValues = {
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FollowersCreateFormOverridesProps = {
    FollowersCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FollowersCreateFormProps = React.PropsWithChildren<{
    overrides?: FollowersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FollowersCreateFormInputValues) => FollowersCreateFormInputValues;
    onSuccess?: (fields: FollowersCreateFormInputValues) => void;
    onError?: (fields: FollowersCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FollowersCreateFormInputValues) => FollowersCreateFormInputValues;
    onValidate?: FollowersCreateFormValidationValues;
} & React.CSSProperties>;
export default function FollowersCreateForm(props: FollowersCreateFormProps): React.ReactElement;
