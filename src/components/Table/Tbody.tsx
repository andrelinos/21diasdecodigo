interface TbodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    children?: React.ReactNode;
}

export function Tbody({ children, ...rest }: TbodyProps) {
    return (
        <tbody className="" {...rest}>
            {children}
        </tbody>
    );
}
