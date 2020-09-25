import React from 'react';
import img1 from 'assets/1.png';
import img2 from 'assets/2.png';
import img3 from 'assets/3.png';

export default function Game() {
    const images = [img1, img2, img3];
    const [user, setUser] = React.useState(null);
    const [computer, setComputer] = React.useState(null);
    const [text, setText] = React.useState("");
    
    const click = (e) => {
        const select_user = e.target.getAttribute("user");
        const select_computer = Math.floor(Math.random() * 3);

        setUser(images[select_user]);
        setComputer(images[select_computer]);

        if ((select_user==0 && select_computer==2) ||
            (select_user==1 && select_computer==0) ||
            (select_user==2 && select_computer==1)) {
                setText("이겼습니다.")
            }
        else if (select_user == select_computer)
                setText("비겼습니다.")
        else
                setText("졌습니다.")
    }

    return (
        <>
        <div>
            <img user={0} src={img1} onClick={click} style={{width:'100px'}}/>
            <img user={1} src={img2} onClick={click} style={{width:'100px'}}/>
            <img user={2} src={img3} onClick={click} style={{width:'100px'}}/>
        </div>
        <div>
            <img src={user} style={{width:'100px'}}/>
            <img src={computer} style={{width:'100px'}}/>
        </div>
        <h2>{text}</h2>
        </>
    )
}