// import React from 'react'
import './table.css'
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'
export default function Table() {
  return (
    <div className='table-wrapper'>
        <table className='table'>
            <thead>
                <tr>
                    <th>Page</th>
                    <th className='expand'>Description</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                <td>Home</td>
                <td>This is it</td>
                <td><span className='label label-live'>Live</span></td>
                <td>
                    <span className='actions'><BsFillTrashFill className='delete-btn'/><BsFillPencilFill/></span>
                </td>
            </tbody>

            <tbody>
                <td>2</td>
                <td>This is it</td>
                <td><span className='label label-draft'>Live</span></td>
                <td>
                    <span className='actions'><BsFillTrashFill className='delete-btn'/>
                    <BsFillPencilFill/></span>
                </td>
            </tbody>
        </table>
    </div>
  )
}
