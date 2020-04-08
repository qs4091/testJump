import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux';
import { PageHeader } from 'antd';
import { Divider } from 'antd';
import { Row, Col } from 'antd';
import { Table,Card } from 'antd';
import  { actionCreator } from './store';


const columns = [
    {
      title: 'Nom',
      dataIndex: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Prénom',
      dataIndex: 'prenom',
    },
];

class detail extends Component {

    render() {

        const { clientList,setCurrent,currentIndex } = this.props;

        let numberAddresToShow = parseInt(currentIndex)-1;

        const rowSelection={
            columnWidth: "100px",
            type:"radio",
            onChange:function(selectedRowKeys, selectedRows){
                setCurrent(selectedRowKeys);
            },
            selectedRowKeys : [currentIndex.toString()]
        }

        return (

            <Fragment>
                <PageHeader
                    className="site-page-header"
                    title="Application JUMP"
                    subTitle="Detail List"
                />
                <Divider orientation="center" style={{marginBottom:"50px"}}>Client List</Divider>
                <Row gutter={[0,80]} justify="center">
                    <Col >
                        <Table
                            rowSelection={rowSelection}
                            columns={columns}
                            dataSource={clientList.toJS()}
                            style={{height:"230px",overflowY:"scroll",width:"500px"}}
                            pagination={false}
                        /> 
                    </Col>
                </Row>
                <Row justify="center">
                    <Col >
                        <Card title="Details" style={{ width: 400 }}>
                            <h2>Address</h2>
                            <p>{clientList.toJS()[numberAddresToShow].address}</p>
                        </Card>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        clientList: state.getIn(['detail','list']),
        currentIndex: state.getIn(['detail','currentIndex'])
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setCurrent(key){
            dispatch(actionCreator.setCurrent(key));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(detail);