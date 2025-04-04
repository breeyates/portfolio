import React from "react";
import { Typography as MUITypography } from '@mui/material';
import { chooseTypographyColor, typographySx, typographyVariants } from "./styles";

export interface TypographyProps {
    text?: string;
    variant?: 'anton' |'inter';
    color?: 'primary' | 'secondary' |'yellow';
    sx?: any;
    userSelect?: boolean;
}

const Typography:React.FC<TypographyProps> = ({
    text,
    variant = 'inter',
    color = 'primary',
    sx,
    userSelect = true,
}: TypographyProps) => {
    const typographyColor = chooseTypographyColor(color);
    const typographyVariant = typographyVariants[variant as keyof typeof typographyVariants]
    const typographyStyles = typographySx(typographyVariant, typographyColor, sx, userSelect);
    return (
        <MUITypography sx={typographyStyles}>{text}</MUITypography>
    );
}

export default Typography;