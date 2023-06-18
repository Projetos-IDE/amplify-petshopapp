/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Pet } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PetProfileOverridesProps = {
    PetProfile?: PrimitiveOverrideProps<FlexProps>;
    Button36492695?: PrimitiveOverrideProps<ButtonProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Name?: PrimitiveOverrideProps<FlexProps>;
    Nome?: PrimitiveOverrideProps<TextProps>;
    Sobre?: PrimitiveOverrideProps<TextProps>;
    "Ra\u00E7a"?: PrimitiveOverrideProps<TextProps>;
    Followers?: PrimitiveOverrideProps<FlexProps>;
    Idade?: PrimitiveOverrideProps<TextProps>;
    Button29766907?: PrimitiveOverrideProps<ButtonProps>;
    Button36492689?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type PetProfileProps = React.PropsWithChildren<Partial<FlexProps> & {
    pet?: Pet;
} & {
    overrides?: PetProfileOverridesProps | undefined | null;
}>;
export default function PetProfile(props: PetProfileProps): React.ReactElement;
