import { Button, Container, Menu } from "semantic-ui-react";
//import React from "react";
import logo from '../../public/assests/logo.png';
import { useStore } from "../stores/store";


export default function NavBar() {
    const {activityStore} = useStore()
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src={logo} alt='logo' style={{marginRight: 10}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item name='Activities' />
                <Menu.Item>
                    <Button onClick={() => activityStore.openForm()} positive content='Create Activity' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}