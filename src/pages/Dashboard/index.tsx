import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './style';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/21692790?s=460&v=4"
            alt="Samuel Meira"
          />
          <div>
            <strong>samuelmeira/frontend-reactjs</strong>
            <p>Description Description Description Description Description </p>
          </div>
          <FiChevronRight />
        </a>
        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/21692790?s=460&v=4"
            alt="Samuel Meira"
          />
          <div>
            <strong>samuelmeira/frontend-reactjs</strong>
            <p>Description Description Description Description Description </p>
          </div>
          <FiChevronRight />
        </a>
        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/21692790?s=460&v=4"
            alt="Samuel Meira"
          />
          <div>
            <strong>samuelmeira/frontend-reactjs</strong>
            <p>Description Description Description Description Description </p>
          </div>
          <FiChevronRight />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
