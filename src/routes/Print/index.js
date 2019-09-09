import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { Table, Divider, Tag, Button } from 'antd'; 

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
 
const Example = () => {
    const componentRef = useRef();
    console.log(componentRef, '-----------------componentRef------------')
    return (
        <div style={{width: '1000px', margin: '100px auto'}}>
            <ReactToPrint
                trigger={() => <Button type="primary">打印</Button>}
                content={() => componentRef.current}
                removeAfterPrint={true}
                pageStyle={{marginTop:'50px'}}
            />
            <ComponentToPrint ref={componentRef} />
        </div>
    );
};




export default Example;