import React, { useState } from "react";
import { useEffect } from "react";
import Tables from 'react-bootstrap/Table';
import style from './style_module.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";


export default function Table({user, getInfo}) {
  const [edit, setEdit] = useState( 1 )
  
  useEffect(() => {
    getInfo()  
  }, [])


  async function deletePosts(id){
    await axios.delete(`http://localhost:305/item/${id}`)
    .then(getInfo())
}
  
  return(
    <div className="table"> 
      <Tables className="table__cont" striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th className="table__th">#id</th>
            <th className="table__th">Ф.И.О</th>
            <th className="table__th">Возраст</th>
            <th className="table__th">
              <Form.Select className="select" onClick={(value) => setEdit(value.target.value)} aria-label="Default select example">
                <option value="1" >Номер</option>
                <option value="2">Адрес</option>
                <option value="3">ЗП</option>
              </Form.Select>
            </th>
          </tr>
        </thead>
        <tbody>
        {
          
          user?.map(item => (
          <tr key={item.id}>
          {
            <>
              <td className="table__th-id">{item.id} </td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              {
                edit == 1 ?
                <td>{item.namber} <svg  onClick={ () => deletePosts(item.id)} xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#fff" d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2Z"/></svg></td>
                : 
                edit == 2 ? 
                <td>{item.address} <svg  onClick={ () => deletePosts(item.id)} xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#fff" d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2Z"/></svg></td>
                :
                <td>{item.salary} <svg  onClick={ () => deletePosts(item.id)} xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#fff" d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2Z"/></svg></td>
              }
            </>
          }
          </tr>
        ))
      }
        </tbody>
      </Tables>
    </div>
  );
}