import React, { PureComponent } from 'react';


class User {
    id: number;
    name: string;
    age: string;
    constructor(id: number, name: string, age: string) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

class Exercises03 extends PureComponent {
    user1 = new User(1, 'John ', '30');
    user2 = new User(2, 'Mary', '25');
    user3 = new User(3, 'Jane', '20');

    render() {
        return (
            <div style={{border: '2px solid black',color: 'black', backgroundColor: 'lightgray'}}>
                <thead >
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody style={{color: 'black', backgroundColor: 'lightgray', border: '1px solid black'}}>
                    <tr>
                        <td >{this.user1.id}</td>
                        <td>{this.user1.name}</td>
                        <td>{this.user1.age}</td>
                    </tr>
                    <tr>
                        <td>{this.user2.id}</td>
                        <td>{this.user2.name}</td>
                        <td>{this.user2.age}</td>
                    </tr>
                    <tr>
                        <td>{this.user3.id}</td>
                        <td>{this.user3.name}</td>
                        <td>{this.user3.age}</td>
                    </tr>
                </tbody>
                
            </div>
        );
    }
}

export default Exercises03;
