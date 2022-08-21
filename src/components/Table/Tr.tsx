interface Props extends React.HTMLAttributes<HTMLTableRowElement> {
    color?: string;
    bgColor?: string;
    children?: React.ReactNode;
}
export function Tr({ color, bgColor, children, ...rest }: Props) {
    return (
        <tr className={`h-8 ${color} ${bgColor}`} {...rest}>
            {children}
        </tr>
    );
}
