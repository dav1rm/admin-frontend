import { useRef } from 'react';
import { Container } from './styles';
import * as Yup from 'yup';

import { Form } from '@unform/web'
import Input from '../../components/Input';
import { FormHandles, SubmitHandler } from '@unform/core';
import { schema } from '../../utils/validation';
import { MdArrowBack } from 'react-icons/md';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { FormData } from '../../types/form';


const CreateUser = () => {
  const formRef = useRef<FormHandles>(null)
  const navigate = useNavigate();

  const handleFormSubmit: SubmitHandler<FormData> = async formData => {
    try {
      // Remove all previous errors
      formRef.current?.setErrors({});

      await schema.validate(formData, {
        abortEarly: false,
      });

      // Validation passed
      api.post("/users", formData).then(() => {
        navigate('/');
      })

    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current?.setErrors(validationErrors);
      }
    }
  }

  return (
    <Container>
      <header>
        <a href="/">
          <MdArrowBack />
        </a>
        <h2>Criar novo usuário</h2>
      </header>

      <Form ref={formRef} onSubmit={handleFormSubmit} >
        <div className='row'>
          <Input label='Nome: *' type="text" name="name" flex={1} />
          <Input label='Email: *' type="email" name="email" flex={1} maxLength={254} />
          <Input label='Senha: *' type="password" name="password" />
          <Input label='Repetir Senha: *' type="password" name="repeat_password" />
        </div>

        <div className='row'>
          <Input mask="99/99/9999" label='Data de nascimento: *' name="birthday" />
          <Input mask="999.999.999-99" label='CPF: *' type="text" name="cpf" />
          <Input label='RG:' type="text" name="rg" />
          <Input mask="(99)99999-9999" label='Telefone: *' type="text" name="telephone" />
          <Input mask="(99)99999-9999" label='Celular:' type="text" name="cellphone" />
        </div>

        <div className='row'>
          <Input mask="99999-999" label='CEP: *' type="text" name="postcode" width={110} />
          <Input label='Rua: *' type="text" name="street" flex={2} />
          <Input label='Número: *' type="text" name="number" width={90} />
          <Input label='Bairro:' type="text" name="neighborhood" />
          <Input label='Cidade: *' type="text" name="city" flex={1} />
          <Input label='UF: *' type="text" name="state" width={90} maxLength={2} />
        </div>

        <div className='row'>
          <Input label='Mãe:' type="text" name="mother" flex={2} />
          <Input label='Pai:' type="text" name="father" flex={2} />
          <Input label='Signo:' type="text" name="sign" />
          <Input label='Altura:' type="number" name="height" width={90} />
          <Input label='Peso:' type="number" name="weight" width={90} />
        </div>

        <div className='row'>
          <Input label='Sexo:' type="text" name="gender" />
          <Input label='Tipo Sanguineo:' type="text" name="blood_type" />
          <Input label='Cor:' type="text" name="color" />
        </div>

        <button type="submit">Cadastrar</button>
      </Form>
    </Container >
  );
};

export default CreateUser;