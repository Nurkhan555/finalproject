import clsx from "clsx";
import styles from "./styles.module.css"
import {ButtonHTMLAttributes} from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "outlined";
}

export const Button = ({children, className, variant, ...rest}: Props) => {
    return (
        <button
            className={
                clsx(className, styles.button, {
                        [styles.primary]: variant === "primary",
                        [styles.outlined]: variant === "outlined"
                    }
                )
            }
            {...rest}>
            {children}
        </button>
    );
};