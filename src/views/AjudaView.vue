<template>
  <div id="abrangent">
    <h1>Ajuda</h1>
    <main>
      <h2>Nosso contato</h2>
      <p>
        Para tirar alguma dúvida ou falar conosco mande um email para a gente
        :)<br />
        <a href="mailto:successstudent9@gmail.com"
          ><i><ins>Clique aqui e mande um email</ins></i></a
        >
      </p>
      <h2>Quem somos?</h2>
      <p>
        Somos um site que irá abordar e proporcionar resumos e testes
        educacionais de matérias básicas dos componentes curriculares do ensino
        fundamental. Com os resumos e os testes, você usuário poderá testar seus
        conhecimentos após fazer leitura dos resumos por meio de testes. Os
        temas dos resumos e dos testes, serão: Linguagens, Matemática, História
        e Geografia.
      </p>
      <h2>Nosso público abrangente</h2>
      <p>
        Usuarios que receiam que já tenham esquecido ou que possuam interesse
        sobre os conhecimentos do ensino fundamental, tais como linguagens,
        matemática, história e geografia. Também nosso site é pensado nesses
        alunos que ainda estão cursando o Ensino Fundamental. Logo nosso site
        está pensando em vários grupos, como crianças, jovens e adultos e até
        mesmo idosos.
      </p>
    </main>
  </div>
</template>
<style scoped>
div#abrangent {
  display: flex;
  flex-flow: column;
  justify-content: center;
  
}
main {
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-self: center;
}
@media screen and (max-width: 600px) {
  p {
    font-size: 18px;
  }
  h2 {
    font-size: 23px;
    line-height: 20px;
  }
}
</style>
