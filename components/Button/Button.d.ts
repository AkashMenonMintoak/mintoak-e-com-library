/// <reference types="react" />
interface ButtonProps {
    customClass?: string;
    name: string;
    onClickMethod: any;
    type?: "button";
    color?: string;
}
export default function Button({ name, onClickMethod, type, color, customClass }: ButtonProps): JSX.Element;
export {};
