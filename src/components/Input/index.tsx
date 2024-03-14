import styles from './styles.module.css'
import {InputHTMLAttributes} from "react";
import clsx from "clsx";


interface Props extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
}

export const Input = ({className, ...rest}: Props) => {
    return (
        <div className={styles.conteiner}>
            <img src="/search.svg" alt=""/>
            <input
                {...rest}
                className={clsx(className, styles.input)}
            />
        </div>
    );
};
