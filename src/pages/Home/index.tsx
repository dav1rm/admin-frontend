import React, { useEffect, useState } from 'react';
import { MdAddCircle, MdDelete, MdEdit, MdSearch } from "react-icons/md";
import { Container, Table } from './styles';
import api from '../../services/api';
import { User } from '../../types/user';

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const { data } = await api.get('/users');

      setUsers(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const handleDeleteTodo = async (user: User) => {
    if (confirm("Tem certeza que deseja excluir?") != true) {
      return;
    }

    try {
      await api.delete(`/users/${user.id}`);
      setUsers(users => users.filter(item => item !== user));
    } catch (err) {
      console.log(err);
    }
  };

  const renderData = () => {
    if (loading) {
      return (<tr><td className="loading" align='center' colSpan={4}>Loading...</td></tr>)
    }
    return users.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.cpf}</td>
          <td>
            <a className="edit" href={`/users/edit/${user.id}`}>
              <MdEdit />
            </a>
            <a className="search" href={`/users/view/${user.id}`}>
              <MdSearch />
            </a>
            <a className="delete" onClick={() => handleDeleteTodo(user)}>
              <MdDelete />
            </a>
          </td>
        </tr>
      )
    }
    )
  }

  return (
    <Container>
      <header>
        <h2>Listagem de usuários</h2>
        <a href="/users/create">
          <MdAddCircle />Novo usuário
        </a>
      </header>
      <Table cellPadding={0} cellSpacing={0}>
        <thead>
          <th>Nome</th>
          <th>Email</th>
          <th>CPF</th>
          <th>Ações</th>
        </thead>

        <tbody>
          {renderData()}
        </tbody>
      </Table>
    </Container>
  )
}

export default Home;