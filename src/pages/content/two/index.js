import React from "react"
import "./index.css"
import fetch from "../../../utils/fetch_api"
import { Table } from 'antd';
import { withRouter } from "react-router-dom"
class Twopage extends React.Component {
  rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };
  columns = [
    {
      title: '基金代码',
      dataIndex: 'code'
    },
    {
      title: '基金名称',
      dataIndex: 'name'
    },
    {
      title: '前日净值',
      dataIndex: 'twoOtherDay'
    },
    {
      title: '昨日净值',
      dataIndex: 'oneOtherDay'
    },
    {
      title: '增长率',
      dataIndex: 'rate',
      render:(text)=>{
        return text+"%"
      }
    },
    {
      title: '赎回状态',
      dataIndex: 'redeemState'
    },
    {
      title: '申购状态',
      dataIndex: 'subState'
    },
    {
      title: '能否购买',
      dataIndex: 'tobuy',
      render:(text)=>{
        return text===""?"不可购买":"可购买"
      }
    },

    {
      title: '手续费',
      dataIndex: 'service'
    },
  ]
  state={
    data:[]
  }
  componentDidMount(){
    fetch("fund").then((res)=>{
      this.setState({
        data:res
      })
      console.log(res)
    })
  }
  render(){
    return(<div>
      <Table rowSelection={this.rowSelection} columns={this.columns} dataSource={this.state.data} />
    </div>)
  }
}
export default withRouter(Twopage)