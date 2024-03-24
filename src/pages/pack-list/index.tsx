import styles from './styles.module.css'
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";
import {Table} from "../../components/Table";
import {Sidebar} from "../../components/Sidebar";
import {getPacksTC} from "../../store/packsReducer.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../store";
import {useEffect} from "react";
import {InitialStateAuth} from "../../store/authReducer.ts";

export const PackList = () => {
    const {user} = useSelector<AppStateType, InitialStateAuth>(({auth}) => {
        return auth
    })

    const dispatch = useDispatch<any>()

    useEffect(() => {
        if (user && user?._id) {
            console.log("useEffect")
            dispatch(getPacksTC({}))
        }
    }, [user?._id])

    console.log(user)

    return (
        <div className={styles.container}>
            <div className={styles.cart}>
                <Sidebar/>
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
