import React from 'react'


import { faEdit, faTrash, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import categorieoffre from '../../../../static/cat.json'
import Model from "../../../../compenents/model";
import Offreform from '../compenents/offreform';
 
const OffreList = ({ offrelist, _removeOffre, addOffre, editOffre, users, getUsersByOffre }) => {

    function removeOffre(_id) {
        if (window.confirm("Are you sures")) {
            _removeOffre(_id);
        }


    }

    return (<>
        <Model id={'id01'} title={<FontAwesomeIcon icon={faPlus} />}>
            <Offreform addEditOffre={addOffre} offreinfo={[{}]} list={categorieoffre} />
        </Model>
        <table className="w3-table-all w3-width w3-margin-top">

            <thead>
                <tr className="w3-orange w3-text-white">
                    <th> Offre</th>
                    <th>Edit</th>
                    <th> Remove</th>
                    <th>Users</th>
                </tr>
            </thead>
            <tbody>
                {offrelist.map(item =>
                    <tr key={item._id} >
                        <th>{item.titre}</th>
                        <th  >
                            <Model id={item._id} title={<FontAwesomeIcon icon={faEdit} />}>
                                {

                                    // I think that is not best practice to use her model !


                                }
                                <Offreform addEditOffre={editOffre} offreinfo={item} list={categorieoffre} />
                            </Model>


                        </th>
                        <th onClick={() => removeOffre(item._id)} ><FontAwesomeIcon icon={faTrash} /></th>

                        {
                            // when click we copy direkt  the users in model below 
                        }
                        <th>
                            <Model id={item._id + 'id'} title={<FontAwesomeIcon  onClick={() => getUsersByOffre(item._id)} icon={faUser} />}>
                                {users && users.map(item => (
                                    <li key={item.id}> {item.nom}   {item.prenom} :   <a onClick={()=>window.open(item._cv_link)} > Cv Link</a></li>
                                )
                                )

                                }

                            </Model>

                        </th>

                    </tr>
                )}
            </tbody>
        </table>

    </>)
}

export default OffreList