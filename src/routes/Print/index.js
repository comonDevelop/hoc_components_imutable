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
        canvas.width=990;
        canvas.height=data.length*40+600;
        canvas.style.border="1px solid #000000";
        var rectH=20;
        var rectW=55;
        var number=28;
        ctx.scale(2,2)
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#ccc";
        ctx.textAlign = "center";    

        ctx.fillText("电子商业汇票承兑清单", number + rectW * 4, 15)
        ctx.fillStyle= "#000000"

        ctx.fillText("编号：", number + rectW * 6, 35)
        ctx.fillStyle= "#000000"
        ctx.fillText("客户号：", 32,  55)
        ctx.fillStyle= "#000000"
        ctx.fillText("时间：", 32,  75)
        ctx.fillStyle= "#000000"
        ctx.fillText("账号：", 32,  95)
        ctx.fillStyle= "#000000"

        let lineHeight = 115, _width = number;
        ctx.fillStyle = "#000000";
        ctx.fillText('序号', _width ,lineHeight);
        ctx.fillText('收款人名称', _width + rectW * 1,lineHeight); 
        ctx.fillStyle = "#000000"; 
        ctx.fillText('开户银行',_width + rectW * 2,lineHeight);
        ctx.fillStyle = "#000000"; 
        ctx.fillText('账号', _width + rectW * 3,lineHeight);
        ctx.fillStyle = "#000000";
        ctx.fillText('汇票号码',_width + rectW * 4,lineHeight);
        ctx.fillStyle = "#000000";
        ctx.fillText('汇票金额',_width + rectW * 5,lineHeight);
        ctx.fillStyle = "#000000";
        ctx.fillText('出票日期',_width + rectW * 6,lineHeight);
        ctx.fillStyle = "#000000";
        ctx.fillText('到期日期',_width + rectW * 7,lineHeight);
        ctx.fillStyle = "#000000";
        ctx.fillText('备注',_width + rectW * 8,lineHeight);

        for(var i= 0;i<data.length;i++){
            let _num = 135, _width = number;
            ctx.fillStyle = "#000000";
            ctx.fillText(i+1, _width,rectH*i+_num); 
            ctx.fillText(data[i].nickName,_width + rectW * 1,rectH*i+_num); 
            ctx.fillStyle = "#000000";
            ctx.fillText(data[i].corpusBanker,_width + rectW * 2,rectH*i+_num);
            ctx.fillStyle = "#000000"; 
            ctx.fillText(data[i].corpusPlayer,_width + rectW * 3,rectH*i+_num);
            ctx.fillStyle = "#000000";
            ctx.fillText(data[i].corpusTie,_width + rectW * 4,rectH*i+_num);
            ctx.fillStyle = "#000000";
            ctx.fillText(data[i].corpusBP,_width + rectW * 5,rectH*i+_num);
            ctx.fillStyle = "#000000";
            ctx.fillText(data[i].corpusPP,_width + rectW * 6,rectH*i+_num);
            ctx.fillStyle = "#000000";
            ctx.fillText(data[i].corpusPP,_width + rectW * 7,rectH*i+_num);
            ctx.fillStyle = "#000000";
            ctx.fillText(data[i].corpusPP,_width + rectW * 8,rectH*i+_num);
            
        }

        for(var i = 0; i<data.length+2; i++){
            ctx.moveTo(rectW*i,100);
            ctx.lineTo(rectW*i,data.length*20 + 120);

            ctx.moveTo(0,rectH*i + 100);
            ctx.lineTo(canvas.width,rectH*i + 100);
            ctx.stroke();
        }

        let _num1 = 135, _height= 20;
        ctx.fillStyle="#000000";
        ctx.fillText('票据总笔数：',32,data.length*20+_num1); 
        ctx.fillText('票据总笔数：',32,data.length*20+_num1 + _height);
        ctx.fillText('保证金为承兑汇票金额：40%',67, data.length*20 +_num1 + _height * 2);
        ctx.moveTo(0, data.length*20 +_num1 + _height * 2);
        ctx.lineTo(canvas.width,data.length*20 +_num1 + _height * 2);
        ctx.fillText('1、经出票人申请，本行审核同意承兑上述电子商业汇票',130, data.length*20 +_num1 + _height * 3);
        ctx.fillText('2、经出票人申请，本行审核同意承兑上述电子商业汇票',130, data.length*20 +_num1 + _height * 4);
        ctx.fillText('承兑银行账（章）', number + rectW * 6, data.length*20 +_num1 + _height * 5);
        ctx.fillText('年月日', number + rectW * 6, data.length*20 +_num1 + _height * 6);
    }

    render() {
        return (
            <div style={{
                minHeight: '600px', 
                minWidth: '990px', 
                background: "url('../../../public/timg.jpg') no-repeat",  
                backgroundSize: "250px 150px",
                backgroundPosition: "bottom right"
            }}>
                <canvas id="cavsElem"></canvas>
            </div>
        )
    }
}


const Print = () => {
    const componentRef = useRef();
    // const outputSrc = () => {
    //     var canvas = document.querySelector('#cavsElem');
    //     var img = convertCanvasToImage(canvas);
    //     console.log(img, '------img----')
    // }
    return (
        <div style={{width: '990px', margin: '100px auto'}}>
            {/* <ComponentToPrint ref={componentRef} /> */}
            <PrintCanvas ref={componentRef} />
            {/* <Button onClick={() => outputSrc()}>导出</Button> */}
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