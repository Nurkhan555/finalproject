import styles from './styles.module.css'
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";
import {Table} from "../../components/Table";

export const PackList = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cart}>
                <div className={styles.sidebar}>
                    sidebar
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>My packs list</h1>
                    <div className={styles.search}>
                        <Input/>
                        <Button className={styles.addButton} variant={"primary"}>Add new pack-list</Button>
                    </div>
                    <Table/>
                </div>
            </div>
        </div>
    );
};
