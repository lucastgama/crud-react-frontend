import React from "react";
import Main from "../template/main/Main";

export default function Home(props) {
  return (
    <Main icon="home" title="Inicio" subTitle="Segundo projeto do curso">
      <div className="display-4">Bem Vindo!!</div>
      <hr />
      <p className="mb-0">Sistema para exeplificar a construção de cadastro</p>
    </Main>
  );
}
