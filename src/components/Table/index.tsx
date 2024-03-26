import styles from "./styles.module.css"
import {ApiTypes} from "../../api/apiTypes.ts";

type Props = {
    packs: null | ApiTypes.Packs.Get.Resp
}
export const Table = ({packs}: Props) => {

    return (
        <table className={styles.table}>
            <thead className={styles.head}>
            <tr>
                <th>Name</th>
                <th>Cards</th>
                <th>Last Updated</th>
                <th>Created by</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody className={styles.body}>

            {packs?.cardPacks.map((cardPack) => {
                    return <tr>
                        <td>{cardPack.name}</td>
                        <td>{cardPack.cardsCount}</td>
                        <td>{cardPack.updated}</td>
                        <td>{cardPack.user_name}</td>
                        <td>
                            <button>Delete</button>
                            <button>Edit</button>
                            <button>Learn</button>
                        </td>
                    </tr>
                })
            }
            </tbody>
        </table>
    );
};

