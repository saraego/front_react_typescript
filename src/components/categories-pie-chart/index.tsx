import { ResponsivePie } from "@nivo/pie"
import { useMemo } from "react";
import { theme } from "../../styles/theme";
import { formatCurrency } from "../../utils/form-currency";


const apiData = [
    {
       _id: '1',
       title: 'Alimentação',
       amount: 30000,
       color: '#ff33bb'
    },
    {
        _id: '2',
        title: 'Compras',
        amount: 30000,
        color: '#5533ff'
     },
     {
        _id: '3',
        title: 'Academia',
        amount: 30000,
        color: '#33ff3a'
     },
     {
        _id: '4',
        title: 'Conta agua',
        amount: 30000,
        color: '#ff3333'
     },
     {
        _id: '5',
        title: 'Conta net',
        amount: 30000,
        color: '#335fff'
     },
     {
        _id: '6',
        title: 'Conta luz',
        amount: 30000,
        color: '#0b0c0b'
     },
    
]

type ChartData = {
    id:string;
    label:string;
    externalId:string;
    value:number;
    color:string;
}


export function CategoriesPie(){

    const data = useMemo<ChartData[]>(() => {
        const chartData: ChartData[] = apiData.map((item)=> ({
            id:item.title,
            label:item.title,
            externalId:item._id,
            value:item.amount,
            color:item.color,
        }))

        return chartData

    },[]);

    return (
        <ResponsivePie 
         data={data} 
         enableArcLabels={false} 
         enableArcLinkLabels={false} 
         colors={({data}) => data.color} 
         margin={{top:20}} 
         valueFormat={formatCurrency}
         theme={{
            text:{fontFamily:'Roboto',fontSize:11},
            tooltip:{
                container:{
                    backgroundColor:theme.colors.black,
                    padding:20,
                    color:theme.colors.white,
                    fontFamily:'Roboto',
                    fontSize:11,
                    borderRadius:8
                }
            }}}
            
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                justify: false,
                translateX: 0,
                translateY: 10,
                itemWidth:120,
                itemHeight:16,
                itemTextColor:theme.colors.neutral,
                itemDirection:'left-to-right',
                itemOpacity:1,
                symbolSize:10,
                symbolShape: 'circle',
            }
        ]}
    />
    )
}