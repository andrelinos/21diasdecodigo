import { CheckCircle } from 'phosphor-react';

interface Props {
    title: string;
}

export function Item({ title }: Props) {
    return (
        <li>
            <CheckCircle size={18} />
            <span style={{ color: '#eee' }}>{title}</span>
        </li>
    );
}
