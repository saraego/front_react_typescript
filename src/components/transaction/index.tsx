import { formatCurrency } from "../../utils/form-currency";
import { Container, Content, Infor } from "./styles";


type TransactionProps = {
    id:number;
    title:string;
    date:string;
    amount:number;
    category:{
        title:string;
        color:string
    }
    variant?: 'income' | 'expense'
}

export function Transaction({id,title,date,amount,category,variant = 'income'}:TransactionProps){
    return (
        <Container>
            <Infor>
                <span>{id.toString().padStart(4,'0')}</span>
                <div>
                    <strong>{title}</strong>
                    <span>{date}</span>
                </div>
            </Infor>

            <Content $variant={variant} $tagColor={category.color}>
                <strong>{formatCurrency(amount)}</strong>
                <span>{category.title.toUpperCase()}</span>
            </Content>
        </Container>
    )
}