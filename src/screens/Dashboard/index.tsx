import React from "react";
import {
  Container,
  Header,
  Photo,
  User,
  UserWrapper,
  UserGreeting,
  UserInfo,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  TransactionsTitle,
  TransactionsList,
} from "./styles";
import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: "1",
      type: "negative",
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      date: "12/05/2022",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
    },
    {
      id: "2",
      type: "positive",
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      date: "12/05/2022",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
    },
    {
      id: "3",
      type: "negative",
      title: "Desenvolvimento de site",
      amount: "R$ 5.000,00",
      date: "12/05/2022",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/38231642?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Rodolfo</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entrada"
          amount="R$ 17.000,00"
          lastTransaction="Ultima transação dia 14 de maio"
        />
        <HighlightCard
          type="down"
          title="Saída"
          amount="R$ 1.000,00"
          lastTransaction="Ultima transação dia 14 de maio"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.000,00"
          lastTransaction="Ultima transação dia 14 de maio"
        />
      </HighlightCards>
      <Transactions>
        <TransactionsTitle>Listagem</TransactionsTitle>
        <TransactionsList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
