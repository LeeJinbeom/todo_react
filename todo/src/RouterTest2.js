import React from 'react';
import queryString from 'query-string';
import { Menu } from 'antd';
import { HomeOutlined, FrownOutlined, InsertRowRightOutlined } from '@ant-design/icons';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom'
import { List, Avatar } from 'antd';
import API from 'Api';
const { SubMenu } = Menu;

export default function RouterTest2() {

    const active = {
        color:"red"
    }

    const [state, setState] = React.useState({
        current: 'mail',
    });

    const handleClick = e => {
        console.log('click ', e);
        setState({ current: e.key });
    };

    return (        
        <>
        <Menu onClick={handleClick} selectedKeys={[state.current]} mode="horizontal">
        <Menu.Item key="mail" icon={<HomeOutlined />}>
            <Link exact to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="student" icon={<FrownOutlined />}>
            <Link exact to="/students">Students</Link>
        </Menu.Item>
        <Menu.Item key="score" icon={<InsertRowRightOutlined />}>
             <Link exact to="/scores">Scores</Link>
        </Menu.Item>
      </Menu>
        <div style={{padding:'20px'}}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/students" component={Students}/>  
                <Route path="/scores" component={Scores}/>                             
                <Route component={NoPage}/>
            </Switch>
        </div>
        </>        
    )
}

function Layout({children}) {
    return (
        <>
        <div>디자인다지인~</div>
        {children}
        </>
    )
}

function Home({history, location, match})
{
    console.dir(location)
    console.dir(match)
    
    const click = () => {
        history.push('/students')
    }

    return(
        <div>
        </div>
    )
}

function NoPage({history, location, match})
{
    console.dir(location)
    console.dir(match)

    return(
        <div>
            NoPage
        </div>
    )
}


function Students({location, match, history})
{
    const [students, setStudents] = React.useState([]);

    React.useEffect(()=>{
        API.get("study/students/")
        .then(res => {
            console.log(res);
            const { data } = res;
            setStudents(data);
        }).catch(error=>{
            console.log(error);
        })
    },[])
    const click = () => {
        history.push('/')
    }

    return(
        <div>
            <List
                itemLayout="horizontal"
                dataSource={students}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                    title={<a href="https://ant.design">{item.name}</a>}
                    description={<>
                                <span>{item.address} / </span>
                                <span>{item.email}</span>
                                </>
                                }
                    />
                </List.Item>
                )}
            />
        </div>
    )
}


function Scores({location, match, history})
{

    const click = () => {
        history.push('/')
    }

    return(
        <div>
            Scores
        </div>
    )
}



function Detail({location, match, history})
{
    console.dir(match);
    console.log(location.search);
    console.log(match.params);

    const qs = queryString.parse(location.search);
    console.dir(qs)

    return(
        <div>
            {match.params.id}
            {qs.name}
            {qs.age}
        </div>
    )
}