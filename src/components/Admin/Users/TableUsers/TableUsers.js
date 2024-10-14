import React from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";
import "./TableUsers.scss";

export function TableUsers(props) {
  const { users } = props;
  return (
    <Table className="table-users-admin">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Username</Table.HeaderCell>
          <Table.HeaderCell>Tienda</Table.HeaderCell>
          <Table.HeaderCell>¿Activo?</Table.HeaderCell>
          <Table.HeaderCell>¿Admin?</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {map(users, (user, index) => (
          <Table.Row key={index}>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell>{user.username}</Table.Cell>
            <Table.Cell>
              {user.first_name ? user.first_name : "No Aplica"}
            </Table.Cell>
            <Table.Cell className="status">
              {user.is_active ? <Icon name="check" /> : <Icon name="close" />}
            </Table.Cell>
            <Table.Cell className="status">
              {user.is_staff ? <Icon name="check" /> : <Icon name="close" />}
            </Table.Cell>
            <Actions user={user} />
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

function Actions(props) {
    const { user } = props;
  return (
    <Table.Cell textAlign="right">
      <Button icon primary onClick={() => console.log(user.email)}>
        <Icon name="pencil" />
      </Button>
      <Button icon negative onClick={() => console.log(user.email)}>
        <Icon name="trash" />
      </Button>
    </Table.Cell>
  );
}
