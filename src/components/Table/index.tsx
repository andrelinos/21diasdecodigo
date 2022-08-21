interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
    children?: React.ReactNode;
}

export function Table({ children, ...rest }: TableProps) {
    return (
        <table className="table-auto striped" {...rest}>
            {children}
        </table>
    );
}
