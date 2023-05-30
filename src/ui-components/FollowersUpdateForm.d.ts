/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Followers } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FollowersUpdateFormInputValues = {
    createdAt?: string;
};
export declare type FollowersUpdateFormValidationValues = {
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FollowersUpdateFormOverridesProps = {
    FollowersUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FollowersUpdateFormProps = React.PropsWithChildren<{
    overrides?: FollowersUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    followers?: Followers;
    onSubmit?: (fields: FollowersUpdateFormInputValues) => FollowersUpdateFormInputValues;
    onSuccess?: (fields: FollowersUpdateFormInputValues) => void;
    onError?: (fields: FollowersUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FollowersUpdateFormInputValues) => FollowersUpdateFormInputValues;
    onValidate?: FollowersUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FollowersUpdateForm(props: FollowersUpdateFormProps): React.ReactElement;
