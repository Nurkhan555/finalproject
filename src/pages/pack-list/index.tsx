import styles from './styles.module.css'
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";
import {Table} from "../../components/Table";
import {Sidebar} from "../../components/Sidebar";
import {createPackTC, deletePackTC, getPacksTC, InitialPacksState, updatePackTC} from "../../store/packsReducer.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../store";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Modal} from "../../components/Modal";


export const PackList = () => {
    const [selectedPackId, setSelectedPackId] = useState('')
    const [isUpdateOpen, setIsUpdateOpen] = useState(false)

    const [newUpdatePackName, setNewUpdatePackName] = useState('')
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
                pageCount: 8,
            }))
        } else navigate('/login')
    }, [])

    const addNewPack = () => {
        dispatch(createPackTC({cardsPack: {name: newPackName, deckCover: deckCover, private: isPrivate}}))
    }

    const deletePack = (packId: string) => {
        dispatch(deletePackTC({id: packId}))
    }

    const updatePackName = () => {
        if(selectedPackId){
            dispatch(updatePackTC({cardsPack:{_id:selectedPackId,name:newUpdatePackName}}))
        }
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
                    <Table
                        packs={packs}
                        onDelete={(packId) => deletePack(packId)}
                        onEdit={(packId) => {
                            setIsUpdateOpen(true);
                            setSelectedPackId(packId)
                        }}
                    />
                    <Modal
                        modalContent={styles.modalContent}
                        isOpen={isUpdateOpen}
                        onClose={() => {
                            setIsUpdateOpen(false)
                            setNewUpdatePackName('')
                        }
                        }
                    >
                        <Input value={newUpdatePackName} label={"Name"}
                               onChange={(e) => setNewUpdatePackName(e.target.value)}/>
                        <Button className={styles.button}
                                onClick={updatePackName}
                                variant={"primary"}
                        >
                            Update
                        </Button>
                    </Modal>
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
                        <Button className={styles.button}
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
