interface Props extends React.HTMLAttributes<HTMLTableCaptionElement> {
    color?: string;
    bgColor?: string;
    children?: React.ReactNode;
}
export function Th({ color, bgColor, children, ...rest }: Props) {
    return (
        <th className={`px-2 text-left ${color} ${bgColor}`} {...rest}>
            {children}
        </th>
    );
}
