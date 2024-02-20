
import { LogoTeste } from "../../components/Logo";
import { Card } from "../../components/card";
import { InputMask } from "@react-input/mask";
import { Input } from "../../components/input";
import { Title } from "../../components/title";
import { ButtonIcon } from "../../components/button-icon";
import { Transaction } from "../../components/transaction";
import { CreateCategoryDialog } from "../../components/create-category-dialog";
import { Aside, Balance, ChartAction, ChartContainer, ChartContent, Filters, Header, InputGroup, Main, SearchTransaction, Section, TransactionGroup } from "./styles";
import { CreateTransactionDialog } from "../../components/create-transaction-dialog";
import { CategoriesPie } from "../../components/categories-pie-chart";
import { FinancialEvolutionBarChart } from "../../components/financial-evolution-bar-chart";

export function Home() {
  return (
    <>
      <Header>
        <LogoTeste children="Our income" />
        <div>
          <CreateTransactionDialog/>
          <CreateCategoryDialog/>
        </div>
      </Header>

      <Main>
        <Section>

          <Filters>
            <Title title="Saldo" subtitle="Receitas e despesas no período" />
            <InputGroup>
              <InputMask
                component={Input}
                mask="dd/mm/yyyy"
                replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
                variant="dark"
                label="Início"
                placeholder="dd/mm/aaaa"
              />
              <InputMask
                component={Input}
                mask="dd/mm/yyyy"
                replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
                variant="dark"
                label="Fim"
                placeholder="dd/mm/aaaa"
              />
              <ButtonIcon />
            </InputGroup>
          </Filters>

          <Balance>
            <Card title="Saldo" amount={500}/>
            <Card title="Receitas" amount={2000} variant="incomes"/>
            <Card title="Gastos" amount={7515} variant="expenses"/>
          </Balance>

          <ChartContainer>
              <header>
                <Title title="Gastos" subtitle="Despesas por categoria no período"/>
              </header>

              <ChartContent>
                <CategoriesPie/>
              </ChartContent>
          </ChartContainer>

          <ChartContainer>
              <header>
                <Title title="Evolução Financeira" subtitle="Saldo, Receitas e Gastos no ano"/>

                <ChartAction>
                  <InputMask
                  component={Input}
                  mask="aaaa"
                  replacement={{a: /\d/ }}
                  variant="black"
                  label="Ano"
                  placeholder="aaaa"
                 />
                 <ButtonIcon/>
                </ChartAction>
              </header>

              <ChartContent>
                <FinancialEvolutionBarChart/>
              </ChartContent>
          </ChartContainer>

        </Section>

        <Aside>

            <header>
              <Title title="Transações" subtitle="Receitas e gastos no período"/>
              <SearchTransaction>
                <Input variant="black" placeholder="Procurar transações"/>
                <ButtonIcon/>
              </SearchTransaction>
            </header>
            
            <TransactionGroup>
              <Transaction id={1} amount={500} date="09/09/2023" category={{title:"Alimentação", color:"#ffc233"}} title="Mercado" />
              <Transaction id={2} amount={78000} date="09/09/2023" category={{title:"Next", color:"#77ff33"}} title="Banco" />
              <Transaction id={3} amount={8000} date="09/09/2023" category={{title:"Thanos", color:"#ff33bb"}} title="Academia" />
              <Transaction id={4} amount={25000} date="09/09/2023" category={{title:"Estacio", color:"#3396ff"}} title="Faculdade" />
              <Transaction id={5} amount={900} date="09/09/2023" category={{title:"Ingles", color:"#ff5833"}} title="Curso" />
              <Transaction id={6} amount={1500} date="09/09/2023" category={{title:"Pos-graduação", color:"#ece034"}} title="Curso" />
            </TransactionGroup>
          
          
        </Aside>
      </Main>
    </>
  );
}
