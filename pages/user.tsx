import { useEffect, useState } from "react";
import Image from 'next/image';
import { userAgent } from "next/server";

const User = () => {
    type User = {
        name: { title: string; first: string; last: string },
        location: { city: string; country: string },
        picture: { large: string },
    }

    const [user, setUser] = useState<User>();
    const [users, setUsers] = useState<User[]>();


    useEffect(() => {
        (async () => {
            const result = await fetch("https://randomuser.me/api");
            const user = await result.json();
            console.log("User: ", user);
            const { name, location, picture } = user.results[0];
            setUser({ name, location, picture });
            console.log(name, location, picture)
        })()
    }, [])


    useEffect(() => {
        (async () => {
            const data = await fetch("https://randomuser.me/api?results=3");
            const res = await data.json();

            let tmpUsers: User[] = [];
            for (let i = 0; i < 3; i++) {
                const { name, location, picture } = res.results[i]
                tmpUsers[i] = { name, location, picture }
            }
            setUsers(tmpUsers)
        })()
    }, [])


    const showUser = () => {
        if (user) {
            return (
                <div>
                    <h2>-----</h2>
                    <span> {user.name.title} </span>
                    <span> {user.name.first} </span>
                    <span> {user.name.last} </span>
                    <Image src={user?.picture.large}
                        alt="User profile picture"
                        width="100"
                        height="100" />
                </div>
            )
        }
        else
            console.log("Can't show user")
    }


    const showUsers = () => {
        if (users) {
            return users?.map((user, index) => {
                console.log("User: ", user.picture.large);
                return (
                    <li key={index}>
                        <span>
                            {user.name.title} {' '}
                            {user.name.first} {' '}
                            {user.name.last}
                        </span>
                        <Image src={user.picture.large}
                            alt="Picture user"
                            width={100}
                            height={100} />
                    </li>

                )
            })
        }
        else
            console.log("Can't show users");
    }

    return (
        <>
            <h1 className="text-5xl">Hello Random user company:</h1>
            {showUser()}
            {showUsers()}
            <br /> <br />
        </>
    )
}

export default User;