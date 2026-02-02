# Testes Automatizados - Jornal Licitante

Este projeto contém testes automatizados para o site **Jornal Licitante** (https://jornallicitante.vercel.app), utilizando o framework Playwright para testes end-to-end.

## Descrição

O projeto visa validar funcionalidades básicas do site, incluindo:
- Acesso à aplicação
- Validação do login
- Validação das licitações exibidas
- Funcionalidade do campo de pesquisa
- Validação da maior data limite

## Estrutura do Projeto

- `pages/`: Contém os objetos de página (Page Objects) para encapsular a lógica de interação com as páginas.
  - `HomePage.js`: Classe para interações com a página inicial.
- `tests/`: Diretório com os arquivos de teste.
  - `home.spec.js`: Arquivo de testes para a página inicial.
- `playwright.config.js`: Configuração do Playwright.
- `package.json`: Dependências e scripts do projeto.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd teste_web
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

## Executando os Testes

Para executar todos os testes:
```bash
npm test
```

Os testes serão executados no modo não-headless (headless: false), permitindo visualizar o navegador durante a execução.

## Configuração

A configuração do Playwright está definida em `playwright.config.js`:
- Diretório de testes: `./tests`
- Timeout: 30 segundos
- Retries: 0
- Viewport: 1280x720
- Screenshots: Apenas em caso de falha
- Vídeos: Retidos em caso de falha

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.