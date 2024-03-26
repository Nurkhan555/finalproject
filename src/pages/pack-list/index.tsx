import styles from './styles.module.css'
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";
import {Table} from "../../components/Table";
import {Sidebar} from "../../components/Sidebar";
import {createPackTC, getPacksTC, InitialPacksState} from "../../store/packsReducer.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../store";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Modal} from "../../components/Modal";


export const PackList = () => {
    const [isPrivate, setIsPrivate] = useState(false)
    const [deckCover, setDeckCover] = useState('')
    const [newPackName, setNewPackName] = useState('')

    const [isOpen, setIsOpen] = useState(false)
    const {packs} = useSelector<AppStateType, InitialPacksState>(({packs}) => {
        return packs
    })
    const navigate = useNavigate()

    const dispatch = useDispatch<any>()

    useEffect(() => {
        const userId = localStorage.getItem('userId')
        if (userId) {
            dispatch(getPacksTC({
                // user_id:userId
            }))
        } else navigate('/login')
    }, [])

    const addNewPack = () => {
        dispatch(createPackTC({cardsPack: {name: newPackName, deckCover: deckCover, private: isPrivate}}))
    }

    return (
        <div className={styles.container}>
            <div className={styles.cart}>
                <Sidebar/>
                <div className={styles.content}>
                    <h1 className={styles.title}>My packs list</h1>
                    <div className={styles.search}>
                        <Input icon={<img src="/search.svg" alt=""/>}/>
                        <Button
                            className={styles.addButton}
                            variant={"primary"}
                            onClick={() => setIsOpen(true)}
                        >
                            Add new pack-list
                        </Button>
                    </div>
                    <Table packs={packs}/>
                    <Modal
                        modalContent={styles.modalContent}
                        isOpen={isOpen}
                        onClose={() => {
                            setIsOpen(false)
                            setDeckCover('')
                            setNewPackName('')
                            setIsPrivate(false)
                        }
                        }
                    >
                        <Input value={newPackName} label={"Name"} onChange={(e) => setNewPackName(e.target.value)}/>
                        <Input value={deckCover} label={"DeckCover"} onChange={(e) => setDeckCover(e.target.value)}/>
                        <label>
                            Private
                            <input type="checkbox" checked={isPrivate}
                                   onChange={(e) => setIsPrivate(e.target.checked)}/>
                        </label>
                        <Button className={styles.createButton}
                                onClick={addNewPack}
                                variant={"primary"}
                        >
                            Create
                        </Button>
                    </Modal>
                </div>
            </div>
        </div>
    );
};
