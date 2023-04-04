/// <reference types="react" />
interface ButtonProps {
    customClass?: any;
    name: string;
    onClickMethod: any;
    type?: "button";
    color?: string;
}
export default function Button({ name, onClickMethod, type, color, }: ButtonProps): JSX.Element;
export {};
