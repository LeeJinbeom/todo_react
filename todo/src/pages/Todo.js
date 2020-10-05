import React from "react";
import { List, Button, Modal } from 'antd';
import { SearchOutlined, RestOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Form, Input, Select, DatePicker, Upload } from 'antd';
import API from 'Api';
import { getToken } from 'account/Util';

export default function Todo(){

    const [todos, setTodos] = React.useState({
        pending: [],
        inprogress: [],
        end: []
    });

    const [form] = Form.useForm();
    const [group, setGroup] = React.useState([]);
    const [state, setState] = React.useState({
        visible: false
    })
    const [fileList, setFileList] = React.useState({
        fileList: [],
        uploading: false,
      })

    React.useEffect(()=>{

        API.get("todo/allTodo", {
            headers: {
                Authorization: "JWT " + window.localStorage.getItem("token")//getToken()
            }
        }).then(res=>{
            const {data} = res;
            console.log(data);
            setTodos(prev => data);
        })

    },[])

    React.useEffect(()=>{

        API.get("todo/todogroup").then(res=>{
            const {data} = res;
            console.log(data);
            setGroup(prev => data);
        })

    },[])

    const showModal = () => {

        // API.get("todo/todo/2").then(res=>{
        //     res.data.end_date = new Date(res.data.end_date);
        //     form.setFieldsValue(res.data);
            
        // });

        setState({
          visible: true,
        });
      };
    
    const handleOk = e => {
        setState({
          visible: false,
        });
      };
    
    const handleCancel = e => {
        setState({
          visible: false,
        });
      };

    const onFinish = e => {        

        const formData = new FormData();

        formData.append("end_date", e.end_date.format("YYYY-MM-DD"));
        formData.append("name", e.name);
        formData.append("status", e.status);
        formData.append("group", e.group);
        formData.append("image", fileList.fileList[0]);

        e.end_date = e.end_date.format("YYYY-MM-DD")

        API.post("todo/todo/", formData).then(res=>{
            return API.get("todo/allTodo")
        }).then(
            res=>{
                const {data} = res;
                setTodos(prev => data);
                form.resetFields();
                setState(prev => ({
                    visible: false
                }));                
            }
        )
    }

    const deleteTodo = (seq) => {

        API.delete("todo/todo/" + seq).then(res=>{
            return API.get("todo/allTodo")
        }).then(
            res=>{
                const {data} = res;
                setTodos(prev => data);
            }
        )
    }

    const props = {
        onRemove: file => {
        setFileList(state => {
            const index = state.fileList.indexOf(file);
            const newFileList = state.fileList.slice();
            newFileList.splice(index, 1);
            return {
              fileList: newFileList,
            };
          });
        },
        beforeUpload: file => {
          setFileList(state => ({
            fileList: [...state.fileList, file],
          }));
          return false;
        },
        fileList: fileList.fileList,
      };
 

    return (
    <>
        <div>
            <Button icon={<PlusOutlined />} onClick={showModal}>추가</Button>
        </div>
        <div>
        <List
            header={<div>할일</div>}
            style={{width:"33%",float:"left",paddingRight:"5px"}}
            itemLayout="horizontal"
            dataSource={todos.pending}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                title={<span>{item.name}</span>}
                description={<>
                                <span>{item.group_name}</span> / <span>{item.reg_date}</span>
                                <Button onClick={()=>{deleteTodo(item.seq)}} style={{float:"right"}} shape="circle" icon={<RestOutlined />} />
                            </>
                            }
                />
            </List.Item>
            )}
        />
        <List
            header={<div>진행중</div>}
            style={{width:"33%",float:"left",paddingRight:"5px"}}
            itemLayout="horizontal"
            dataSource={todos.inprogress}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                title={<span>{item.name}</span>}
                description={<>
                                <span>{item.group_name}</span> / <span>{item.reg_date}</span>
                                <Button onClick={()=>{deleteTodo(item.seq)}} style={{float:"right"}} shape="circle" icon={<RestOutlined />} />
                            </>
                            }
                />
            </List.Item>
            )}
        />
        <List
            header={<div>종료</div>}
            style={{width:"33%",float:"left",paddingRight:"5px"}}
            itemLayout="horizontal"
            dataSource={todos.end}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                title={<span>{item.name}</span>}
                description={<>
                                <span>{item.group_name}</span> / <span>{item.reg_date}</span>
                                <Button onClick={()=>{deleteTodo(item.seq)}} style={{float:"right"}} shape="circle" icon={<RestOutlined />} />
                            </>
                            }
                />
            </List.Item>
            )}
        />
        </div>
        <Modal
          title="추가"
          visible={state.visible}
          footer={null}
          onOk={handleOk}
          onCancel={handleCancel}
        >
        <Form form={form} onFinish={onFinish} labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal">        
        <Form.Item  name="name" label="이름">
          <Input />
        </Form.Item>
        <Form.Item  name="status" label="상태">
          <Select>
            <Select.Option value="">선택</Select.Option>
            <Select.Option value="pending">할일</Select.Option>
            <Select.Option value="inprogress">진행중</Select.Option>
            <Select.Option value="end">완료</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item  name="end_date" label="종료일">
            <DatePicker />
        </Form.Item>
        <Form.Item  name="image" label="이미지">
            <Upload {...props}>
                <Button icon={<UploadOutlined />}>Select File</Button>
            </Upload>
        </Form.Item>
        <Form.Item name="group" label="그룹">
          <Select>
          <Select.Option value="">선택</Select.Option>
              {group.map((v)=>{
                  return <Select.Option value={v.seq}>{v.name}</Select.Option>            
              })}
          </Select>
          </Form.Item>
          <Button type="primary" htmlType="submit">
            등록
          </Button>
          <Button onClick={handleCancel}>
            취소
          </Button>
          </Form>
        </Modal>
    </>
    )
}