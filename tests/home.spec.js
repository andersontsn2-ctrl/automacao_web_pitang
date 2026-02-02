import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage.js';

test.describe('Jornal Licitante - Validações Básicas', () => {

  test('Acesso à aplicação', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await homePage.validatePage();
  });

  test('Validar login da página', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await homePage.loginPage();
    
  });

  test('Validar as licitações da página', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await homePage.validateLicitacoes();
  });

  test('Valida o campo pesquisa', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await homePage.validateSearch();
  });

test('Validar Maior Data Limite', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await homePage.validateDataMaior();
  });

});
