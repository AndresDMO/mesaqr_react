import React, { useState, useEffect } from "react";
import {Loader} from "semantic-ui-react";
import { HeaderPage, TableUsers, AddEditUserForm } from "../../components/Admin";
import {BasicModal} from "../../components/Common";
import { useUser } from "../../hooks";

export function UsersAdmin() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const { loading, users, getUsers } = useUser();


  useEffect(() => {getUsers()}, [refetch]);

  const openCloseModal = () => setShowModal((prevState) => !prevState);
  const onRefetch = () => setRefetch((prevState) => !prevState);

  const addUser = () => {
    setTitleModal("Crear Nuevo Usuario");
    setContentModal(<AddEditUserForm onClose={openCloseModal} onRefetch={onRefetch} />);
    openCloseModal();
  };

  const updateUser = (data) => {
    setTitleModal("Actualizar Usuario");
    setContentModal(<AddEditUserForm onClose={openCloseModal} onRefetch={onRefetch} user={data} />);
    openCloseModal();
  };

  return (
    <>
      <HeaderPage 
      title="Usuarios" 
      btnTitle="Nuevo Usuario" 
      btnClick={addUser}/>
      {loading ? (
        <Loader active inline="centered">
          Cargando usuarios...
        </Loader>
      ) : (
        <TableUsers users={users} updateUser={updateUser}/>
        )}

        <BasicModal
        show={showModal}
        onClose={openCloseModal}
        title={titleModal} 
        children={contentModal}/>
    </>
  );
}