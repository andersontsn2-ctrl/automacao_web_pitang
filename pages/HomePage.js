import { expect } from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;
    this.url = 'https://jornallicitante.vercel.app';
    this.title = page.getByText('Jornal do Licitante');
    this.btnEntrar = page.locator('text=Entrar');
    this.searchInput = page.locator('input');
    this.licitacoes = page.locator("div[class='space-y-4']");
    this.search = page.locator("input[type='text']");
    this.filtro = page.locator("button[role='combobox']");
    this.username = page.locator("input[name='identifier']");
    this.btncontinuar = page.locator("button[class='cl-internal-2iusy0']");


  }


  async goto() {
    await this.page.goto(this.url);
  }

  async validatePage() {
    await expect(this.title).toBeVisible();
  }

  async loginPage() {
    await this.btnEntrar.click();
    await this.username.fill('Andersontest1');
    
  }

  async validateLicitacoes() {
    await expect(this.licitacoes).toBeVisible();
  }

  async validateSearch() {
    await this.search.fill('Aquisição de veículos');
    await expect(this.page.getByText('Aquisição de veículos - Edital 006/2024')).toBeVisible();
    
  }


async validateDataMaior() {
  // garante que as datas já renderizaram
  await this.page
    .locator('span', { hasText: /\d{2}\/\d{2}\/\d{4}/ })
    .first()
    .waitFor({ state: 'visible' });

  // hoje em UTC (sem hora)
  const hoje = new Date();
  const hojeUTC = new Date(Date.UTC(
    hoje.getFullYear(),
    hoje.getMonth(),
    hoje.getDate()
  ));

  const textos = await this.page
    .locator('span')
    .filter({ hasText: /Data Limite:/ })
    .allTextContents();

  const datasVencidas = [];

  for (const texto of textos) {
    const match = texto.match(/(\d{2}\/\d{2}\/\d{4})/);
    if (!match) continue;

    const [dia, mes, ano] = match[1].split('/').map(Number);
    const dataLimiteUTC = new Date(Date.UTC(ano, mes - 1, dia));

    if (dataLimiteUTC < hojeUTC) {
      datasVencidas.push(match[1]);
    }
  }

  // LOG
  if (datasVencidas.length > 0) {
    console.error('Datas vencidas encontradas:');
    datasVencidas.forEach(d => console.error(` - ${d}`));
    throw new Error(`Existem ${datasVencidas.length} datas vencidas`);
  } else {
    console.log('Nenhuma data vencida encontrada');
  }
}




}
