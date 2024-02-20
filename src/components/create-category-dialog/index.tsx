import { useCallback, useState } from "react";
import { Dialog } from "../dialog";
import { Button } from "../button";
import { Title } from "../title";
import { Input } from "../input";
import { Container } from "./styles";



export function CreateCategoryDialog(){
    const [open,setOpen] = useState(false)

    const handleClose = useCallback(()=>{
        setOpen(false)
    },[])

    const onSubmit = useCallback(()=>{
        handleClose()
    },[handleClose])

    return (
        <Dialog open={open} onOpenChange={setOpen} trigger={<Button>Nova categoria</Button>}>

            <Container>
                <Title title="Nova Categoria" subtitle="Crie uma nova categoria para suas transações"/>
                <form>
                    <div>
                        <Input variante="black" placeholder="Nome da categoria..." label="Nome"/>
                        <Input label="Cor" type="color"/>
                    </div>
                    <footer>
                        <Button onClick={handleClose} variant="outline" type="button">Cancela</Button>
                        <Button onClick={onSubmit} type="button">Cadastra</Button>
                    </footer>
                </form>
           </Container>
        </Dialog>
    )
}