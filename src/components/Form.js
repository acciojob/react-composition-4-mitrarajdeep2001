import React, {useState} from "react"

export default function Form(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return(
        <form onSubmit={(e) => {
            e.preventDefault()
            console.log({name, email, password})
        }}>
            <div>
                <label for="name">Name</label>
                <input id="name" type="text" onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label for="email">Email</label>
                <input id="email" type="email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label for="password">Password</label>
                <input id="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <input type="submit" value="submit"/>
        </form>
    )
}