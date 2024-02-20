import { ResponsiveBar } from "@nivo/bar"
import { useMemo } from "react"
import dayjs from "dayjs"
import ptBRlocale from "dayjs/locale/pt-br";
import { theme } from "../../styles/theme";
import { formatCurrency } from "../../utils/form-currency";
dayjs.locale(ptBRlocale)

const apiData = [
   {
    _id:{
        year:2023,
        mouth:1,
    },
    balance:64000,
    incomes:76343,
    expenses:45875,
   },
   {
    _id:{
        year:2023,
        mouth:2,
    },
    balance:63000,
    incomes:66343,
    expenses:45875,
   },
   {
    _id:{
        year:2023,
        mouth:3,
    },
    balance:62000,
    incomes:56343,
    expenses:45875,
   },
   {
    _id:{
        year:2023,
        mouth:4,
    },
    balance:64120,
    incomes:46343,
    expenses:45875,
   },
   {
    _id:{
        year:2023,
        mouth:5,
    },
    balance:60000,
    incomes:36343,
    expenses:45875,
   },
   {
    _id:{
        year:2023,
        mouth:6,
    },
    balance:64100,
    incomes:26343,
    expenses:45875,
   },
]


type ChartDate = {
    month:string;
    Saldo:number;
    Receitas:number;
    Gastos:number;
}

export function FinancialEvolutionBarChart(){

    const data = useMemo<ChartDate[]>(()=>{
        const chartData:ChartDate[] = apiData.map(item => ({
            month:dayjs(`${item._id.year}-${item._id.mouth}-01`).format('MMM'),
            Saldo:item.balance,
            Receitas:item.incomes,
            Gastos:item.expenses
        }))

        return chartData
    },[])

    return (
        <ResponsiveBar 
          data={data}
          keys={['Saldo','Receitas','Gastos']}
          colors={[theme.colors.info,theme.colors.primary,theme.colors.error]}
          indexBy={'month'}
          groupMode="grouped"
          enableLabel={false}
          enableGridY={true}//false or true - sao as linhas de marcações de nivel
          padding={0.2}
          axisLeft={{
            tickSize:0,
            format:formatCurrency,
          }}
          margin={{left:80,bottom:28}}
          theme={{
            text:{fontFamily:'Roboto',fontSize:10},
            axis:{ticks:{text:{fill:theme.colors.white}}},
            tooltip:{container:{backgroundColor:theme.colors.black,padding:16,color:theme.colors.white,fontFamily:'Roboto',
                     fontSize:12,borderRadius:8}}
          }}
          valueFormat={formatCurrency}
          />
    )
}