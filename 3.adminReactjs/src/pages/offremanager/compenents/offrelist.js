import React from 'react'

import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const OffreList = ({ offrelist }) => {

    return (<>
   
        <table className="w3-table-all w3-width w3-margin-top">
        <button className="w3-margin"> +</button> 
            <thead>
   
                <tr className="w3-orange w3-text-white">
                    
                    <th> Offre</th>
                    <th>Edit</th>
                    <th> Remove</th>
                </tr>
            </thead>
            <tbody>
                {offrelist.map(item =>
                    <tr key={item._id} >
                        <th>{item.titre}</th>
                        <th  ><FontAwesomeIcon icon={faEdit} /></th>
                        <th  ><FontAwesomeIcon icon={faTrash} /></th>
                    </tr>
                )}
            </tbody>
        </table>

    </>)
}

export default OffreList