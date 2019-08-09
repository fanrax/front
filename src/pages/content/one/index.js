import React from "react"
import fetch from "../../../utils/fetch_api"
import { withRouter } from "react-router-dom"
import { Table } from 'antd';
import "./index.css"




class Onepage extends React.Component {
  // rowSelection object indicates the need for row selection
  rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };
  columns = [
    {
      title: 'Title',
      dataIndex: 'title'
    },
    {
      title: 'Id',
      dataIndex: 'id',
    },
    {
      title: 'Url',
      dataIndex: 'url',
    },
    {
      title: 'Cover',
      dataIndex: 'cover',
    }
  ]
  state={
    data:[]
  }
  componentDidMount(){
    fetch("list").then((res)=>{
      res.map((item)=>{
        item.key = item.id
        return item
      })
      this.setState({
        data:res
      })
    })
  }
  render(){
    return(<div>
      <Table rowSelection={this.rowSelection} columns={this.columns} dataSource={this.state.data} />
    </div>)
  }
}
export default withRouter(Onepage)