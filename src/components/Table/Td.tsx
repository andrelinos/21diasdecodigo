interface Props extends React.HTMLAttributes<HTMLTableCellElement> {
    color?: string;
    bgColor?: string;
    children?: React.ReactNode;
}
export function Td({ color, bgColor, children, ...rest }: Props) {
    return (
        <td className={`px-2 ${color} ${bgColor}`} {...rest}>
            {children}
        </td>
    );
}
