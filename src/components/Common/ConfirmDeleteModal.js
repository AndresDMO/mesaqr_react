import React from 'react';
import { Modal, Button } from 'semantic-ui-react';

export function ConfirmDeleteModal(props) {
  const { show, onClose, onConfirm, user } = props;

  return (
    <Modal open={show} onClose={onClose} size="tiny">
      <Modal.Header>Confirmar Eliminación</Modal.Header>
      <Modal.Content>
        <p>¿Estás seguro de eliminar al usuario {user?.username}?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={onClose}>
          Cancelar
        </Button>
        <Button positive onClick={onConfirm}>
          Confirmar
        </Button>
      </Modal.Actions>
    </Modal>
  );
}