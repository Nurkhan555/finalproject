import styles from './styles.module.css'
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";
import {Table} from "../../components/Table";
import {Sidebar} from "../../components/Sidebar";
import {getPacksTC, InitialPacksState} from "../../store/packsReducer.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../store";
import {useEffect} from "react";



export const PackList = () => {
    const {packs} = useSelector<AppStateType, InitialPacksState>(({packs}) => {
        return packs
    })

    const dispatch = useDispatch<any>()

    useEffect(() => {
        const userId = localStorage.getItem('userId')
        if (userId) {
            dispatch(getPacksTC({
                // user_id:userId
            }))
        }
    }, [])

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
                    <Table packs={packs}/>
                </div>
            </div>
        </div>
    );
};
