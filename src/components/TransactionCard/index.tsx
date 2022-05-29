import React from "react";
import {
  Container,
  Title,
  Amount,
  Footer,
  CategoryContainer,
  TypeIcon as CategoryIcon,
  TypeText,
} from "./styles";

interface Props {
  data: TransactionCardProps;
}

export interface TransactionCardProps {
  type: "positive" | "negative";
  title: string;
  amount: string;
  category: Category;
  date: string;
}

interface Category {
  name: string;
  icon: string;
}

export function TransactionCard(props: Props) {
  const { type, title, amount, category, date } = props.data;
  return (
    <Container>
      <Title>{title}</Title>
      <Amount type={type}>
        {type === "negative" && "-"}
        {amount}
      </Amount>
      <Footer>
        <CategoryContainer>
          <CategoryIcon name={category.icon} />
          <TypeText>{category.name}</TypeText>
        </CategoryContainer>
        <TypeText>{date}</TypeText>
      </Footer>
    </Container>
  );
}
