:spiral_calendar: Atualizado em 3 de MAIO de 2021 :heart:

<img align="right" alt="GIF" height="160px" src="https://github.com/rdeconti/rdeconti-resources/blob/main/Digital%20Innovation%20One%20-%20Logotipo.png" />

# Projeto Digital Innovation One Avanade Angular Developer

# Desenvolvendo SPA com Angular

- Este projeto foi proposto pela Digital Innovation One 
  - Link do código original: https://github.com/cahferreira93/SPA-Angular
  - Professor: Camila Ribeiro
  - Aula: https://web.digitalinnovation.one/project/desenvolvendo-spa-com-angular/learning/e318b899-6d23-4070-9927-11cbd748f7ec?back=/track/avanade-angular-developer&bootcamp_id=60feba98-5232-4e30-9484-a7d1f82a8b34
 
# Descrição
Aprenda mais sobre Single Page Application e tenha como missão criar a sua primeira página front-end utilizando componentes.

# Detalhes obtidos das aulas

- Apresentação: https://drive.google.com/file/d/1NTEol9-CNtz8nDqauxBQgPBRHs2kYbC5/view?usp=sharing

# Desafios propostos:

- Desafio proposto pela Digital Innovation One (Felipe Aguiar)
<img src="https://github.com/rdeconti/Projeto-DIO-Angular-Cadastro-Usuarios/blob/master/documentation/Desafio%20-%20Digital%20Innovation%20One.jpg" />

- Desafio proposto pela professora: Camila Ribeiro
<img src="https://github.com/rdeconti/Projeto-DIO-Angular-Cadastro-Usuarios/blob/master/documentation/Desafio%20-%20Avanade.jpg" />

# O que foi realizado dos desafios propostos

- Utilizei a apresentação disponibilizada no projeto e também o conteúdo da aula de "ANGULAR Básico" da DIO para desenvolver esta solução
- Foi criada uma aplicação ANGULAR para cadastrar usuários
- Código da aplicação está disponibilizado no GitHub;
- ter pelo menos 3 Componentes interagindo na mesma página: `user-list.component.html` tem estes componentes:
  - AppComponent - que chama o formulário de lista
  - UserListComponent - que chama o formulário para confirmar exclusão do usuário
  - ConfirmationDialogComponent - que pede confirmação da exclusão do usuário ou cancela
  - UserFormDialogComponent - que permite criar ou alterar o usuário ou cancela (título da tela formatado em `user-form-dialog.component`)

- escolha pelo menos 4 componentes do Angular Material e incorpore na aplicação - foram incorporados estes componentes:
  - CdkTableModule,
  - MatTableModule,
  - MatToolbarModule,
  - MatPaginatorModule,
  - MatSortModule,
  - MatMenuModule,
  - MatIconModule,
  - MatButtonModule,
  - MatDialogModule,
  - ReactiveFormsModule,
  - MatInputModule,
  - MatSelectModule

- O que foi realizado:
  - Criei um modelo com os campos do cadastro de usuário proposto pela DIO - conteúdo: \core\models\user.ts
  - Carreguei MOCK com dados de teste - conteúdo \core\constants\usr-static-data.ts
  - Crie a página inicial com tabela para carregar os dados dos usuários. Utilizei o componente `mat-table` que permite utilizar filtros para as colunas e selecionar registros (achei muito legal e fácil de implementar)
  - Todas as fases do CRUD são controladas pelo `\services\user.service.ts`

# Melhorias futuras

- Incluir o componente `mat-card` para atender o desafio do Felipe Aguilar (utilizar o exemplo `https://material.angular.io/components/card/examples` para inlcuir o avatar no CARD)
- Tratar o upload da foto do usuário
- Criar um vídeo para publicar no YouTube: estou preparando o vídeo, nunca publiquei, vou fazer e divulgar até meados de maio.
- Colocar identificação de qual usuário está sendo excluído na tela de confirmação
- Melhorar os títulos da lista inicial

- Tela inicial
<img src="https://github.com/rdeconti/Projeto-DIO-Angular-Cadastro-Usuarios/blob/master/screens_with_tests/tela-inicial.jpg" />

- Tela com seleção de itens para página
<img src="https://github.com/rdeconti/Projeto-DIO-Angular-Cadastro-Usuarios/blob/master/screens_with_tests/tela-sele%C3%A7%C3%A3o-itens.jpg" />

- Tela com 50 itens por página
<img src="https://github.com/rdeconti/Projeto-DIO-Angular-Cadastro-Usuarios/blob/master/screens_with_tests/tela-com-50-itens.jpg" />

- Tela com filtro por idade
<img src="https://github.com/rdeconti/Projeto-DIO-Angular-Cadastro-Usuarios/blob/master/screens_with_tests/tela-com-filtro-idade.jpg" />

- Tela com seleção de itens por idade
<img src="https://github.com/rdeconti/Projeto-DIO-Angular-Cadastro-Usuarios/blob/master/screens_with_tests/tela-sele%C3%A7%C3%A3o-por-idade.jpg" />

- Tela com exclusão de registro
<img src="https://github.com/rdeconti/Projeto-DIO-Angular-Cadastro-Usuarios/blob/master/screens_with_tests/tela-exclus%C3%A3o-usu%C3%A1rio.jpg" />

- Tela com alteração de registro
<img src="https://github.com/rdeconti/Projeto-DIO-Angular-Cadastro-Usuarios/blob/master/screens_with_tests/tela-altera%C3%A7%C3%A3o-usu%C3%A1rio.jpg" />

- Tela com inclusão de registro
<img src="https://github.com/rdeconti/Projeto-DIO-Angular-Cadastro-Usuarios/blob/master/screens_with_tests/tela-altera%C3%A7%C3%A3o-usu%C3%A1rio.jpg" />
