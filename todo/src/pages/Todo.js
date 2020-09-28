import React from "react";
import { List, Avatar, Button } from 'antd';
import { SearchOutlined, RestOutlined } from '@ant-design/icons';
import API from 'Api';

export default function Todo(){

    const [todos, setTodos] = React.useState({
        pending: [],
        inprogress: [],
        end: []
    });

    React.useEffect(()=>{

        API.get("todo/todo?status=pending").then(res=>{
            const {data} = res;
            setTodos(prev => ({
                ...prev,
                pending:data
            }));
        })

        API.get("todo/todo?status=inprogress").then(res=>{
            const {data} = res;
            setTodos(prev => ({
                ...prev,
                inprogress:data
            }));
        })

        API.get("todo/todo?status=end").then(res=>{
            const {data} = res;
            setTodos(prev => ({
                ...prev,
                end:data
            }));
        })

    },[])
 

    return (
    <>
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
                                <Button style={{float:"right"}} shape="circle" icon={<RestOutlined />} />
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
                                <Button style={{float:"right"}} shape="circle" icon={<RestOutlined />} />
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
                                <Button style={{float:"right"}} shape="circle" icon={<RestOutlined />} />
                            </>
                            }
                />
            </List.Item>
            )}
        />
    </>
    )
}