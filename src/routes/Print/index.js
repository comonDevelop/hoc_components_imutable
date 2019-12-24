import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { Table, Divider, Tag, Button } from 'antd'; 
import "./index.less";
class ComponentToPrint extends React.Component {
    render() {
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                render: text => <a>{text}</a>,
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: 'Tags',
                key: 'tags',
                dataIndex: 'tags',
                render: tags => (
                    <span>
                        {tags.map(tag => {
                            let color = tag.length > 5 ? 'geekblue' : 'green';
                            if (tag === 'loser') {
                                color = 'volcano';
                            }
                            return (
                                <Tag color={color} key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                            );
                        })}
                    </span>
                ),
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <a>Invite {record.name}</a>
                        <Divider type="vertical" />
                        <a>Delete</a>
                    </span>
                ),
            },
        ];
        const data = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
                tags: ['loser'],
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
            },
        ];
        return (
            <Table columns={columns} dataSource={data}  pagination={false} />
        );
    }
}
 
class PrintCanvas extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            data : [
                {nickName: "咸蛋的蛋", corpusBanker: 0, corpusPlayer: 0, corpusTie: 0, corpusBP: 0, corpusPP: 3138},
                {nickName: "空有我葬", corpusBanker: 42200, corpusPlayer: 0, corpusTie: 0, corpusBP: 0, corpusPP: 0},
                {nickName: "白字清欢", corpusBanker: 17700, corpusPlayer: 0, corpusTie: 0, corpusBP: 0, corpusPP: 0},
                {nickName: "野风吹", corpusBanker: 0, corpusPlayer: 44500, corpusTie: 0, corpusBP: 0, corpusPP: 0},
                {nickName: "在一起不分开", corpusBanker: 0, corpusPlayer: 5400, corpusTie: 0, corpusBP: 0, corpusPP: 0},
                {nickName: "迎风偷吻你", corpusBanker: 0, corpusPlayer: 39600, corpusTie: 0, corpusBP: 0, corpusPP: 0},
                {nickName: "让我认识你", corpusBanker: 7700, corpusPlayer: 0, corpusTie: 0, corpusBP: 0, corpusPP: 0},
                {nickName: "荒废诗书", corpusBanker: 0, corpusPlayer: 37838, corpusTie: 0, corpusBP: 0, corpusPP: 0},
                {nickName: "还是当年颜色", corpusBanker: 0, corpusPlayer: 48688, corpusTie: 0, corpusBP: 0, corpusPP: 0},
                {nickName: "百般流传", corpusBanker: 0, corpusPlayer: 16400, corpusTie: 0, corpusBP: 0, corpusPP: 0},
                {nickName: "对眼错过", corpusBanker: 0, corpusPlayer: 22388, corpusTie: 0, corpusBP: 0, corpusPP: 0},
            ]
        }
    }

    componentDidMount() {
        const {data} = this.state;
        var summaryInfo = [{betNum: 32,corpusAmount: 587466,corpusBP: 8600,corpusBanker: 455366,corpusPP: 4200,corpusPlayer: 114900,corpusTie: 4400,gameNo: 15,resultAmount: 0,shoeNo: 14,tableID: 1}]

        var canvas=document.querySelector('#cavsElem');
        var ctx=canvas.getContext('2d');
        canvas.width=455*2;
        canvas.height=data.length*40+150;
        canvas.style.border="1px solid #ccc";
        var rectH=20;
        var rectW=65;
        ctx.scale(2,2)
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#ccc";
        ctx.textAlign = "center";    


        ctx.fillText("承兑列表", 227, 15)
        ctx.fillStyle= "#000000"



        let lineHeight = 35;
        ctx.fillStyle = "#000000";
        ctx.fillText('序号',32,lineHeight);
        ctx.fillText('用户',97,lineHeight); 
        ctx.fillStyle = "#ff0000"; 
        ctx.fillText('庄',162,lineHeight);
        ctx.fillStyle = "#006fff"; 
        ctx.fillText('闲',227,lineHeight);
        ctx.fillStyle = "#07c160";
        ctx.fillText('和',292,lineHeight);
        ctx.fillStyle = "#ff0000";
        ctx.fillText('庄对',357,lineHeight);
        ctx.fillStyle = "#006fff";
        ctx.fillText('闲对',422,lineHeight);

        for(var i= 0;i<data.length;i++){
            let _num = 55;
            ctx.fillStyle = "#000000";
            ctx.fillText(i+1,32,rectH*i+_num); 
            ctx.fillText(data[i].nickName,97,rectH*i+_num); 
            ctx.fillStyle = "#ff0000";
            ctx.fillText(data[i].corpusBanker,162,rectH*i+_num);
            ctx.fillStyle = "#006fff"; 
            ctx.fillText(data[i].corpusPlayer,227,rectH*i+_num);
            ctx.fillStyle = "#07c160";
            ctx.fillText(data[i].corpusTie,292,rectH*i+_num);
            ctx.fillStyle = "#ff0000";
            ctx.fillText(data[i].corpusBP,357,rectH*i+_num);
            ctx.fillStyle = "#006fff";
            ctx.fillText(data[i].corpusPP,422,rectH*i+_num);
            
        }

        let _num1 = 55;
        ctx.fillStyle = "#000000";
        ctx.fillText('合计',32,data.length*20+_num1); 
        ctx.fillText('',97,data.length*20+_num1); 
        ctx.fillStyle = "#ff0000";
        ctx.fillText(summaryInfo[0].corpusBanker,162,data.length*20+_num1);
        ctx.fillStyle = "#006fff"; 
        ctx.fillText(summaryInfo[0].corpusPlayer,227,data.length*20+_num1);
        ctx.fillStyle = "#07c160";
        ctx.fillText(summaryInfo[0].corpusTie,292,data.length*20+_num1);
        ctx.fillStyle = "#ff0000";
        ctx.fillText(summaryInfo[0].corpusBP,357,data.length*20+_num1);
        ctx.fillStyle = "#006fff";
        ctx.fillText(summaryInfo[0].corpusPP,422,data.length*20+_num1);

        for(var i = 0; i<data.length+2; i++){
            ctx.moveTo(rectW*i,0);
            ctx.lineTo(rectW*i,canvas.height);

            ctx.moveTo(0,rectH*i);
            ctx.lineTo(canvas.width,rectH*i);
            ctx.stroke();
        }
    }

    render() {
        return (
            <div style={{height: '600px', width: '1000px', background: "url('../../../public/timg.jpg') no-repeat"}}>
                <canvas id="cavsElem"></canvas>
            </div>
        )
    }
}


const Print = () => {
    const componentRef = useRef();
    console.log(componentRef, '-----------------componentRef------------')
    return (
        <div style={{width: '1000px', margin: '100px auto'}}>
            {/* <ComponentToPrint ref={componentRef} /> */}
            <PrintCanvas ref={componentRef} />
            <ReactToPrint
                trigger={() => <Button type="primary">打印</Button>}
                content={() => componentRef.current}
                removeAfterPrint={true}
                pageStyle={{marginTop:'50px'}}
            />
        </div>
    );
};




export default Print;